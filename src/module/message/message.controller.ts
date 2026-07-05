import { Request, Response } from "express"
import httpStatus  from "http-status";
import validator from "validator";
import { catchAsync } from "../../utility/catch.async.js";
import { messageService } from "./message.service.js";
import { sendResponse } from "../../utility/send.response.js";
import { prisma } from "../../lib/prisma.js";


const message =catchAsync (async (req: Request, res : Response) => {
   const payload =req.body;

   const postMessage = await messageService.massageIntoDB(payload);

    if (!validator.isEmail(payload.email)) {
      throw new Error("Invalid email");
    }

   sendResponse(res,{
    success: true,
    status: httpStatus.OK,
    message: "Message sent successfully",
    data: postMessage
   })
})



const verifyEmail = async (req: Request<{ token: string }>, res: Response) => {


  const { token } = req.params;

  

  const message = await messageService.verifyEmail(token);

  

  if (!message) {
    return res.status(404).json({
      message: "Invalid Token",
    });
  }
  

  await prisma.message.update({
    where: {
      verificationToken: token,
    },
    data: {
      verified: true,
      verificationToken: null,
    },

  });

  if (message.verified) {
    return res.status(400).json({
      message: "Email already verified",
    });
  }

  sendResponse(res, {
    success: true,
    status: httpStatus.OK,
    message: "Email verified successfully",
    data: null,
  });
};


export const messageController ={
    message,
    verifyEmail
}
import { prisma } from "../../lib/prisma"
import { transporter } from "../../utility/send.mail";
import { IMessage } from "./message.interface"
import * as crypto from "node:crypto";


const massageIntoDB = async(payload: IMessage)=>{

    const token = crypto.randomBytes(32).toString("hex");

    const postMessage = await prisma.message.create({
      data: {
        name: payload.name,
        email: payload.email,
        phone: payload.phone,
        message: payload.message,
        verified: false,
        verificationToken: token,
      },
    });
 

   

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: payload.email,
      subject: "Verify your email",

      html: `
        <h2>Hello ${payload.name}</h2>

        <p>Click below to verify your email.</p>

        <a href="http://localhost:5000/api/message/verify/${token}">
            Verify Email
        </a>
    `,
    });

    return postMessage;
}

const verifyEmail = async (token: string) => {
  
  const message = await prisma.message.findUnique({
  where: {
    verificationToken: token,
  },
});

    return message;

}
  


export const messageService = {
    massageIntoDB,
    verifyEmail
}
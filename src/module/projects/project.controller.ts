import { Request, Response } from "express";
import httpStatus  from "http-status";
import { catchAsync } from "../../utility/catch.async.js";
import { projectService } from "./project.service.js";
import { sendResponse } from "../../utility/send.response.js";

const postProjectController = catchAsync(async (req: Request, res: Response)=>{
   const payload = req.body;

   const projectResult =await projectService.postProjectInDB(payload)

   sendResponse(res,{
    success: true,
    status : httpStatus.OK,
    message : "Project Posted Successfully",
    data: projectResult
   })

})

const getProject = catchAsync( async (req: Request, res: Response)=>{
    const result = await projectService.getProjectInDB();
    sendResponse(res,{
        success: true,
        status: httpStatus.OK,
        message: "get project successfully",
        data: result
    }) 
})

export const projectController ={
    postProjectController,
    getProject
}
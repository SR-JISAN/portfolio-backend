import { Request, Response } from "express";
import { catchAsync } from "../../utility/catch.async";
import { projectService } from "./project.service";
import { sendResponse } from "../../utility/send.response";
import httpStatus  from "http-status";

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
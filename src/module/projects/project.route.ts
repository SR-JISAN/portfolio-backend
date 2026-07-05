import { Router } from "express";
import { projectController } from "./project.controller";


const route = Router()

route.post("/post-project", projectController.postProjectController);
route.get("/get-project", projectController.getProject)

export const projectRoute = route;

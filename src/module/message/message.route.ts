import { Router } from "express";
import { messageController } from "./message.controller";

const route = Router();

route.post("/message", messageController.message);

route.get("/message/verify/:token", messageController.verifyEmail);

export const messageRoute =  route;
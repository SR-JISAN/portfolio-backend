import cookieParser from "cookie-parser";
import { Application, Request, Response } from "express";
import express from "express";

import cors from "cors";
import config from "./config/index.js";
import { messageRoute } from "./module/message/message.route.js";
import { projectRoute } from "./module/projects/project.route.js";



const app : Application = express()

app.use(
  cors({
    origin: config.app_url,
    credentials: true,
  }),
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World, this is portfolio of mine");
});

app.use("/api", messageRoute )

app.use("/api", projectRoute)

export default app;
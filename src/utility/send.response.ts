import { Response } from "express";
import { TResponse } from "./response.type.js";



export const sendResponse = <T> (res: Response, data: TResponse<T>) => {
    res.status(data.status).json({
        success: data.success,
        status: data.status,
        message: data.message,
        data: data.data,
        meta: data.meta
    })
}
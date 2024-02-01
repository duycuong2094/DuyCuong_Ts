import { Request, Response } from "express";
import { getAnswerService, getCategoryService, getDetailsQuestionService, getQuestionService } from "../service/getApi.service";
export const getCategoryController=async(req:Request,res:Response)=>{
    const result = await getCategoryService();
    res.status(200).json({
        message:"Lấy thành công",
        result
    })
}
export const getAnswersController=async(req:Request,res:Response)=>{
    const result = await getAnswerService();
    res.status(200).json({
        message:"Lấy thành công",
        result
    })
}
export const getQuestionController=async(req:Request,res:Response)=>{
    const result = await getQuestionService();
    res.status(200).json({
        message:"Lấy thành công",
        result
    })
}
export const getDetailsQuestionController=async(req:Request,res:Response)=>{
    const result = await getDetailsQuestionService(Number(req.query.id),Number(req.query.level));
    res.status(200).json({
        message:"Lấy thành công",
        result
    })
}
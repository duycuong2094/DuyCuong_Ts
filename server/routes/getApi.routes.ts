import  express  from 'express';
import { getAnswersController, getCategoryController, getDetailsQuestionController, getQuestionController } from '../controller/getApi.controller';
const ApiyRouter=express.Router();
ApiyRouter.get("/api/v1/category",getCategoryController);
ApiyRouter.get("/api/v1/anwser",getAnswersController)
ApiyRouter.get("/api/v1/question",getQuestionController)
ApiyRouter.get(`/api/v1/questions`,getDetailsQuestionController)
export default ApiyRouter

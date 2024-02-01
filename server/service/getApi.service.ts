import mysql from "mysql2/promise";
import pool from "../utils/mysql.until";
export const getCategoryService = async () => {
  const category = mysql.createPool(pool);
  const [result]: any = await category.execute("SELECT * FROM category");
  
  return result;
};
export const getAnswerService = async () => {
  const anser = mysql.createPool(pool);
  const [result]: any = await anser.execute("SELECT * FROM answers");
  return result;
};
export const getQuestionService = async () => {
  const question = mysql.createPool(pool);
  const [result]: any = await question.execute("SELECT * FROM question");
  return result;
};
export const getDetailsQuestionService = async (id:number,level:number) => {
  console.log(id,level);
  
  const question = mysql.createPool(pool);
  const [result]: any = await question.execute("select * from question where id_Category=? AND level	= ?",[id,level]);
  return result;
};

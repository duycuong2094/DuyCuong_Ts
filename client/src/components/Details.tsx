import { useSelector } from 'react-redux'
import { Answer } from '../utils/answer';
import { Question } from '../utils/question';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Details() {
    const store:any=useSelector(state=>state)
    const [point,setPoint]=useState<Answer[]>([])    
    const navigate=useNavigate()
    const answerClick=(item:Answer)=>{
    const check=point.find((items)=>items.idAnser==item.idAnser)
        if(!check){
    setPoint([...point,item])
        }else{
            const newPoin=point.filter((items)=>items.idAnser!=item.idAnser)
            newPoin.push(item)
            setPoint(newPoin)
        }
    }
    console.log(point);
    
    const nopbai=()=>{
        const checkStatus=point.filter((item)=>item.status==true);
        alert(`Số điểm của bạn là ${checkStatus.length*20}/100`)
        setPoint([])
        navigate("/")
        
    }
  return (
    <div>
        {store.DetaiQuestionSlice.entiensDetailsQuestion?store.DetaiQuestionSlice.entiensDetailsQuestion.map((item:Question,i:number)=>(
            <p className='question' key={i}>{item.content}
            {store.anwserSlice.entiensAnser?store.anwserSlice.entiensAnser.map((items:Answer,index:number)=>(
                <div onClick={()=>answerClick(items)} className='answer' key={index}>{item.answer_id==items.idAnser?items.content:""}</div>
            )):""}
            </p>
        )) :""}
        <button onClick={nopbai}> Nộp Bài</button>
    </div>
  )
}

export default Details
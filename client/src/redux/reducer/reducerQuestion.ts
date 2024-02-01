import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import publicAxios from '../../config/public.config';
import { Question } from '../../utils/question';
export const fetchQuestion:any = createAsyncThunk('question/getQuestion', async () => {
    const response = await publicAxios.get("api/v1/question");
    return response.data.result;
  });
interface QuestionReducer{
entiensAnser:Question[]
}
const initialState:QuestionReducer={
    entiensAnser:[]
}
const questionSlice:any=createSlice({
    name:"questions",
    initialState,
    reducers:{},
    extraReducers:(buid)=>{
        buid
        .addCase(fetchQuestion.fulfilled,(state:QuestionReducer,action:PayloadAction<Question[]>)=>{
            state.entiensAnser=[...action.payload]
        })
    }
})
export default questionSlice.reducer
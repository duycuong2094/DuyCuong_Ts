import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import publicAxios from '../../config/public.config';
import { Answer } from '../../utils/answer';
export const fetchAnwser:any = createAsyncThunk('anser/getAnwser', async () => {
    const response = await publicAxios.get("api/v1/anwser");
    return response.data.result;
  });
interface AnwserReducer{
entiensAnser:Answer[]
}
const initialState:AnwserReducer={
    entiensAnser:[]
}
const answerSlice:any=createSlice({
    name:"answer",
    initialState,
    reducers:{},
    extraReducers:(buid)=>{
        buid
        .addCase(fetchAnwser.fulfilled,(state:AnwserReducer,action:PayloadAction<Answer[]>)=>{
            state.entiensAnser=[...action.payload]
        })
    }
})
export default answerSlice.reducer
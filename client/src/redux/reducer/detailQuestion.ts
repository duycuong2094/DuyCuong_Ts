import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import publicAxios from '../../config/public.config';
import { Res } from '../../components/HomePage';

export const detaliQuestion:any = createAsyncThunk('detailQuestion/getDetailsQuestion', async (item:Res) => {
    
    const response = await publicAxios.get(`api/v1/questions?id=${item.categoryId}&level=${item.level}`);

    return response.data.result;
  });
interface detailQuestionReducer{
entiensDetailsQuestion:Res[]
}
const initialState:detailQuestionReducer={
    entiensDetailsQuestion:[]
}
const DetaiQuestionSlice:any=createSlice({
    name:"details",
    initialState,
    reducers:{},
    extraReducers:(buid)=>{
        buid
        .addCase(detaliQuestion.fulfilled,(state:detailQuestionReducer,action:PayloadAction<Res[]>)=>{
            state.entiensDetailsQuestion=[...action.payload]

        })
    }
})
export default DetaiQuestionSlice.reducer
import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import publicAxios from '../../config/public.config';
import { category } from '../../utils/category';
export const fetchCategories:any = createAsyncThunk('category/fetchCategories', async () => {
    const response = await publicAxios.get("api/v1/category");
    return response.data.result;
  });
interface CategoryReducer{
entiensCategory:category[]
}
const initialState:CategoryReducer={
    entiensCategory:[]
}
const categorySlice:any=createSlice({
    name:"category",
    initialState,
    reducers:{},
    extraReducers:(buid)=>{
        buid
        .addCase(fetchCategories.fulfilled,(state:CategoryReducer,action:PayloadAction<category[]>)=>{
            state.entiensCategory=[...action.payload]

        })
    }
})
export default categorySlice.reducer
import { configureStore } from '@reduxjs/toolkit';
import categorySlice from "./reducer/reducer"
import anwserSlice from "./reducer/reducerAnwser"
import questionSlice from "./reducer/reducerQuestion"
import DetaiQuestionSlice from "./reducer/detailQuestion"
const store=configureStore({
    reducer:{
        categorySlice,anwserSlice,questionSlice,DetaiQuestionSlice
    }
})
export default store
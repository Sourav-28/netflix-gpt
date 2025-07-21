import { createSlice } from "@reduxjs/toolkit";
import { act } from "react";

const gptSlice=createSlice({
    name:'gpt',
    initialState:{
        showGptSearchView:false,
    },
    reducers:{
        toggleGptSearchView:(state)=>{
            state.showGptSearchView=!state.showGptSearchView;
        }
    }

})

export default gptSlice.reducer;
export const {toggleGptSearchView}=gptSlice.actions;
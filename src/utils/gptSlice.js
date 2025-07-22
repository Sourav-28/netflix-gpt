import { createSlice } from "@reduxjs/toolkit";
import { act } from "react";

const gptSlice=createSlice({
    name:'gpt',
    initialState:{
        showGptSearchView:false,
        movieResults:null,
        movieNames:null,
    },
    reducers:{
        toggleGptSearchView:(state)=>{
            state.showGptSearchView=!state.showGptSearchView;
        },
        addGptMovieResult: (state, action) => {
            const {movieNames, movieResults}=action.payload;
            state.movieNames=movieNames;
            state.movieResults=movieResults;
            // state.gptMovies = action.payload;
        },
    }

})

export default gptSlice.reducer;
export const {toggleGptSearchView, addGptMovieResult}=gptSlice.actions;
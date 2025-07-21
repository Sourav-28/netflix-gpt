import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice"; //user reducer just the name. We are importing what we are exporting from userSlice.js file as default
import movieReducer from "./movieSlice";
import gptReducer from "./gptSlice";

const appStore= configureStore({
    reducer:{
        user:userReducer,
        movies:movieReducer,
        gpt:gptReducer,
    },
})

export default appStore;
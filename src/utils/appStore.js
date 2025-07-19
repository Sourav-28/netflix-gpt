import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice"; //user reducer just the name. We are importing what we are exporting from userSlice.js file as default
import movieReducer from "./movieSlice";
const appStore= configureStore({
    reducer:{
        user:userReducer,
        movies:movieReducer,
    },
})

export default appStore;
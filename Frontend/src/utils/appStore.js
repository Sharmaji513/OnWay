import {configureStore} from "@reduxjs/toolkit"
import  useReducer  from "../utils/userSlice";
import  captainReducer  from "../utils/captainSlice";

const appStore = configureStore({

    reducer: {
        user: useReducer,
        captain: captainReducer
       
        
    }
})

export default appStore;
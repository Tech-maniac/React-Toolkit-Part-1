import { configureStore } from '@reduxjs/toolkit'
import counterSlice from './reducer'

export const store = configureStore({
    reducer : {
        //Add Reducers : 
        counter : counterSlice,
        
    }
})


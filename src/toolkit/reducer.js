import { createSlice } from '@reduxjs/toolkit'

//Initial/Default value
const initialState = {
    value : 50
}

const counterSlice = createSlice({
    name : "counter",
    initialState,
    //Reducer functions :
    reducers : {
        //Actions/Logic/How to do those actions : 
        increment : (state)=>{
            state.value+=1;
        },
        decrement : (state)=>{
            state.value-=1;
        }
    }
})

export const {increment, decrement} = counterSlice.actions;

export default counterSlice.reducer;




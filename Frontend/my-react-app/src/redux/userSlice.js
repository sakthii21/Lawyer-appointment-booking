import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name:"user",
    initialState:{
        token: null,
    },
    reducers:{
        settoken : (state, action) =>{
                   state.token = action.payload.token;
        },
        removeToken:(state)=>{
            state.token = null
        }
    }
})
export const {settoken,removeToken} = userSlice.actions;
export default userSlice.reducer;
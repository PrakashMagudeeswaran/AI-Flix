import { createSlice } from '@reduxjs/toolkit';

const langslice=createSlice({
  name:"language",
  initialState:{
    lang:"en"
  },
  reducers:{
   handlelang:(state,action)=>{
     state.lang=action.payload
   }
  }
})

export const {handlelang}= langslice.actions;
export default langslice.reducer
import { createSlice } from '@reduxjs/toolkit';

const gbtslice=createSlice({
 name:"gbt",
 initialState:{
   showGBTsearch:false,
   moviesName:null,
   moviesresult:null 
 },
 reducers:{
   toggleGBTpage:(state)=>{
     state.showGBTsearch=!state.showGBTsearch
   },
   finalGBTpage:(state,action)=>{
   const {moviesName,moviesresult}=action.payload;
   state.moviesName=moviesName;
   state.moviesresult=moviesresult;
  },
  removeSuggestions:(state)=>{
    state.moviesName=null;
    state.moviesresult=null;
  }

 }
})
export const { toggleGBTpage,finalGBTpage,removeSuggestions } = gbtslice.actions;
export default gbtslice.reducer;

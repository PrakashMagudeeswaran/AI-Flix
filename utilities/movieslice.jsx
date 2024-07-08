import { createSlice } from '@reduxjs/toolkit';

const movieSlice = createSlice({
  name: "movies",
  initialState: { nowPlaying: null,
  trailerView:null,
  upcoming:null,
  popular:null,
  toprated:null,
  classics:null,
  comedy:null,
  fantasy:null,
  dicaprio:null},

  reducers: {
    addNowPlaying: (state, action) => {
      state.nowPlaying = action.payload;
    },
    upComing: (state, action) => {
      state.upcoming = action.payload;
    },
    classicals: (state, action) => {
      state.classics = action.payload;
    },
    topRate: (state, action) => {
      state.toprated = action.payload;
    },
    animeandfantasy: (state, action) => {
      state.fantasy = action.payload;
    },
    starringDicaprio: (state, action) => {
      state.dicaprio = action.payload;
    },
    popularMovie: (state, action) => {
      state.popular = action.payload;
    },
    comedyMovie: (state, action) => {
      state.comedy = action.payload;
    },
    addTrailerView:(state,action)=>{
       state.trailerView=action.payload;
    }  
  }
});

export const { addNowPlaying,starringDicaprio,classicals,animeandfantasy,comedyMovie,upComing,popularMovie,topRate,addTrailerView } = movieSlice.actions;
export default movieSlice.reducer;

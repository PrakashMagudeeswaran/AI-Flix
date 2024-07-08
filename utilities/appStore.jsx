import {configureStore} from '@reduxjs/toolkit'
import userReducer from './userSlice'
import moviesReducer from './movieslice'
import gbtReducer from './gbtslice'
import languageReducer from './langslice'

const appStore = configureStore({
  reducer:{
    user:userReducer,
    movies:moviesReducer,
    gbt:gbtReducer,
    language:languageReducer
  }
})

export default appStore

import {options} from '../utilities/Links'
import {useDispatch} from 'react-redux'
import { useEffect } from 'react';
import {addNowPlaying} from '../utilities/movieslice'
import { useSelector } from 'react-redux';

const useNowPlaying = () => {
  const nowplaying=useSelector(store=>store.movies.nowplaying)
  const dispatch=useDispatch()
  const getNowPlaying=async()=>{
    const data=await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1',options)
    const json= await data.json()
    dispatch(addNowPlaying(json.results))
  }
  useEffect(()=>{
 !nowplaying && getNowPlaying();
 
  },[])
}

export default useNowPlaying

import {options} from '../utilities/Links'
import {useDispatch} from 'react-redux'
import { useEffect } from 'react';
import {upComing} from '../utilities/movieslice'
import { useSelector } from 'react-redux';

const useUpcoming = () => {
  const upcome=useSelector(store=>store.movies.upcoming)
  const dispatch=useDispatch()
  const upPlaying=async()=>{
    const data=await fetch('https://api.themoviedb.org/3/movie/upcoming',options)
    const json= await data.json()
    dispatch(upComing(json.results))
  }
  useEffect(()=>{
   !upcome && upPlaying();
 
  },[])
}

export default useUpcoming

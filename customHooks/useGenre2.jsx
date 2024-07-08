import {options} from '../utilities/Links'
import {useDispatch} from 'react-redux'
import { useEffect } from 'react';
import {  comedyMovie } from '../utilities/movieslice';
import { useSelector } from 'react-redux';

const useGenre2= () => {
  const comedy=useSelector(store=>store.movies.comedy)
  const dispatch=useDispatch()
  const Genre2=async()=>{
    const data=await fetch('https://api.themoviedb.org/3/movie/18785/similar?language=en-US&page=1',options)
    const json= await data.json()
    dispatch(comedyMovie(json.results))
  }
  useEffect(()=>{
  !comedy && Genre2();
 
  },[])
}

export default useGenre2

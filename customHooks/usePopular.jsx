import {options} from '../utilities/Links'
import {useDispatch} from 'react-redux'
import { useEffect } from 'react';
import {popularMovie} from '../utilities/movieslice'
import { useSelector } from 'react-redux';

const usePopular= () => {

  const pop=useSelector(store=>store.movies.popular)
  const dispatch=useDispatch()
  const popular=async()=>{
    const data=await fetch('https://api.themoviedb.org/3/movie/popular',options)
    const json= await data.json()
    dispatch(popularMovie(json.results))
  }
  useEffect(()=>{
  !pop && popular();
 
  },[])
}

export default usePopular

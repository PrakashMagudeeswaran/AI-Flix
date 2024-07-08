import {options} from '../utilities/Links'
import {useDispatch} from 'react-redux'
import { useEffect } from 'react';
import { animeandfantasy } from '../utilities/movieslice';
import { useSelector } from 'react-redux';


const useGenre1= () => {
  const fantasy=useSelector(store=>store.movies.fantasy)
  const dispatch=useDispatch()
  const Genre1=async()=>{
    const data=await fetch('https://api.themoviedb.org/3/movie/129/similar?language=en-US&page=1',options)
    const json= await data.json()
    dispatch(animeandfantasy(json.results))
  }
  useEffect(()=>{
   !fantasy && Genre1();
 
  },[])
}

export default useGenre1

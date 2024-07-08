import {options} from '../utilities/Links'
import {useDispatch} from 'react-redux'
import { useEffect } from 'react';
import { classicals } from '../utilities/movieslice';
import { useSelector } from 'react-redux';


const useGenre= () => {
  const genre=useSelector(store=>store.movies.classics)
  const dispatch=useDispatch()
  const Genre=async()=>{
    const data=await fetch('https://api.themoviedb.org/3/movie/680/similar?language=en-US&page=1',options)
    const json= await data.json()
    dispatch(classicals(json.results))
  }
  useEffect(()=>{
  
  !genre && Genre();
 
  },[])
}

export default useGenre

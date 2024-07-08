import {options} from '../utilities/Links'
import {useDispatch} from 'react-redux'
import { useEffect } from 'react';
import {topRate} from '../utilities/movieslice'
import { useSelector } from 'react-redux';


const useTopRated = () => {
  const toprate=useSelector(store=>store.movies.toprated)
  const dispatch=useDispatch()
  const topRated=async()=>{
    const data=await fetch('https://api.themoviedb.org/3/movie/top_rated',options)
    const json= await data.json()
    dispatch(topRate(json.results))
  }
  useEffect(()=>{
  !toprate && topRated();
 
  },[])
}

export default useTopRated

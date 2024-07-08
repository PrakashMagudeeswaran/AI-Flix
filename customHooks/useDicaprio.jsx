import {options} from '../utilities/Links'
import {useDispatch} from 'react-redux'
import { useEffect } from 'react';
import {  starringDicaprio } from '../utilities/movieslice';
import { useSelector } from 'react-redux';


const useDicaprio= () => {
  const dicaprio=useSelector(store=>store.movies.dicaprio)
  const dispatch=useDispatch()
  const Dicaprio=async()=>{
    const data=await fetch('https://api.themoviedb.org/3/search/person?query=dicaprio&include_adult=false&language=en-US&page=1',options)
    const json= await data.json()
    dispatch(starringDicaprio(json.results[0].known_for))
  }
  useEffect(()=>{
  !dicaprio && Dicaprio();
 
  },[])
}

export default useDicaprio

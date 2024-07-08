import {options} from '../utilities/Links'
import {useDispatch} from 'react-redux'
import { useEffect } from 'react';
import { addTrailerView} from '../utilities/movieslice'
import { useSelector } from 'react-redux';

const useTrailer = (movieID) => {
  const trailer=useSelector(store=>store.movies.trailerView)
  const dispatch=useDispatch()
  const trailerPreview=async()=>{

    const data= await fetch(`https://api.themoviedb.org/3/movie/${movieID}/videos?language=en-US`, options)
    const json= await data.json()
    const filterTrailer=json.results.filter((video)=>video.type==="Trailer")
    const filterTeaser=json.results.filter((video)=>video.type==="Teaser")
    const Trailer=filterTrailer.length? filterTrailer[0] : filterTeaser[0]
    dispatch(addTrailerView(Trailer))
   
  }


  useEffect(() => {
    !trailer && trailerPreview()
  }, [])
}

export default useTrailer

import './Browse.css';
import {useSelector} from 'react-redux'
import useTrailer from '../customHooks/useTrailer'
import lang from '../utilities/language'


const VideoPlayBack = ({movies,movieID,count}) => {
  const ln=useSelector(store=>store.language?.lang)
  useTrailer(movieID)
  const key=useSelector(store=>store.movies?.trailerView)


  return (
   <>
     <div className="movienow">
    <div className="discription">
      <h2>{movies[count].title}</h2>
      <p>{movies[count].overview}</p></div>
      <div className="buttons">
      <button className="buttonN">{lang[ln].play}</button>
      <button  className="buttonN">{lang[ln].moreinfo}</button></div>
      </div>
      <div >
    <iframe className="video" src={`https://www.youtube.com/embed/${key?.key}?autoplay=1&mute=1&controls=0&showinfo=0&amp;fs=1&loop=1`}
    allow="autoplay; encrypted-media; fullscreen; picture-in-picture" ></iframe> 
    </div>
   </>
  )
}

export default VideoPlayBack

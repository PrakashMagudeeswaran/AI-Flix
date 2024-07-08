import MovieCard from './MovieCard';
import './Browse.css';
import { useSelector } from 'react-redux';
import lang from '../utilities/language'
const MovieCards = ({ movies, movies1, movies2, movies3,movies4,movies5,movies6,movies7 }) => {
  const ln=useSelector(store=>store.language?.lang)
  const movieArrays = [movies, movies1, movies2, movies3,movies4,movies5,movies6,movies7];

  return (
    <><div className="cards">
      {movieArrays?.map((moviesArray, index) => (
        <div key={index}>
          {index === 0 && <h3>{lang[ln].nowplaying}</h3>}
          {index === 1 && <h3>{lang[ln].upcoming}</h3>}
          {index === 2 && <h3 >{lang[ln].toprated}</h3>}
          {index === 3 && <h3 >{lang[ln].popular}</h3>}
          {index === 4 && <h3 >{lang[ln].classics}</h3>}
          {index === 5 && <h3 >{lang[ln].animeandfantasy}</h3>}
          {index === 6 && <h3 >{lang[ln].comedydrama}</h3>}
          {index === 7 && <h3 >{lang[ln].starring}</h3>}
          <div className="moviecards">
            {moviesArray?.map(movie => (
              movie.poster_path &&
              <MovieCard key={movie.id} image={movie.poster_path} title={movie.title} />
            ))}
          </div>
        </div>
      ))}</div>
    </>
  );
};

export default MovieCards;

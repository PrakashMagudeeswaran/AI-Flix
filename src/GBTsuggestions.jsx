import React, { useState } from 'react';
import { useSelector } from 'react-redux';


const GBTsuggestions = () => {
  const { moviesName, moviesresult } = useSelector((store) => store.gbt);
  if (!moviesName || !moviesresult) return null;

  const filteredResults = moviesresult.map((result) => {
    const maxValue = Math.max(...result.map(res => res.vote_count)); 
    return result.filter(res => res.vote_count === maxValue);
  });
  
  return (
    <>
      {filteredResults.map(filter => (
        filter.map(movie => (
          movie.poster_path && (
            <div key={movie.id} className="cardsfinal"> 
              <img
                className="singlecard"
                src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                alt={movie.title}
              />
              <div>
                <p>{movie.title}</p>
                <p>{movie.vote_average}</p>
                <p className="overview">{movie.overview}</p>
              </div>
            </div>
          )
        ))
      ))}
    </>
  );
  
  
        }

export default GBTsuggestions;

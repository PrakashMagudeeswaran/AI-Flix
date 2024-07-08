import React from 'react';
import './Browse.css'

const MovieCard = ({ image, title }) => {

  return (
    <>
   
    <div className="card">
      <img src={`https://image.tmdb.org/t/p/w200/${image}.jpg`} alt={title} />
    </div>
    </>
  );
};

export default MovieCard;

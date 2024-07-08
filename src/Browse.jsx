import HeaderCommon from './HeaderCommon';
import useNowPlaying from '../customHooks/useNowPlaying';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import VideoPlayBack from './VideoPlayBack';
import useUpcoming from '../customHooks/useUpcoming';
import useTopRated from '../customHooks/useTopRated';
import usePopular from '../customHooks/usePopular';
import MovieCards from './MovieCards';
import useGenre from '../customHooks/useGenre';
import useGenre1 from '../customHooks/useGenre1';
import useGenre2 from '../customHooks/useGenre2';
import useDicaprio from '../customHooks/useDicaprio';
import GBTpage from './GBTpage';

const Browse = () => {
  const isGBTpage = useSelector((state) => state.gbt?.showGBTsearch);
  useNowPlaying();
  useUpcoming();
  useTopRated();
  usePopular();
  useGenre();
  useGenre1();
  useGenre2();
  useDicaprio();
  const movies = useSelector((state) => state.movies?.nowPlaying);
  const movies1 = useSelector((state) => state.movies?.upcoming);
  const movies2 = useSelector((state) => state.movies?.toprated);
  const movies3 = useSelector((state) => state.movies?.popular);
  const movies4 = useSelector((state) => state.movies?.classics);
  const movies5 = useSelector((state) => state.movies?.fantasy);
  const movies6 = useSelector((state) => state.movies?.comedy);
  const movies7 = useSelector((state) => state.movies?.dicaprio);
  if (
    movies === null ||
    movies1 === null ||
    movies2 === null ||
    movies3 === null ||
    movies4 === null ||
    movies5 === null ||
    movies6 === null ||
    movies7 === null
  )
    return null;
  console.log('Sasuke Uchiha');
  return (
    <>
      <HeaderCommon />
      {isGBTpage ? (
        <GBTpage />
      ) : (
        <>
          <VideoPlayBack movies={movies} movieID={movies[0].id} />
          <MovieCards
            movies={movies}
            movies1={movies1}
            movies2={movies2}
            movies3={movies3}
            movies4={movies4}
            movies5={movies5}
            movies6={movies6}
            movies7={movies7}
          />
        </>
      )}
    </>
  );
};

export default Browse;

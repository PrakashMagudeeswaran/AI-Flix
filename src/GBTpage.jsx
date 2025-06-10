import React, { useRef, useState } from 'react';
import './Browse.css';
import lang from '../utilities/language';
import { useSelector, useDispatch } from 'react-redux';
import genAI from '../utilities/googleai';
import searchinTMDB from '../customHooks/useGPIsearch';
import { finalGBTpage, removeSuggestions } from '../utilities/gbtslice';
import GBTsuggestions from './GBTsuggestions';

const GBTpage = () => {
const [loading, setLoading] = useState(false);
const [error, setError] = useState(null);
const ln = useSelector(store => store.language.lang);
const searchapi = useRef(null);
const dispatch = useDispatch();

const handleAIsearch = async () => {
dispatch(removeSuggestions());
setLoading(true);
setError(null);  // Reset error state before search

try {
if (!searchapi.current) return;
const searchQuery = `Act as movie recommendation system and suggest movies for the query: ${searchapi.current.value}. Only give me names of 20-50 movies, comma separated like the given result ahead. Example result: Avatar, Ironman, Bahubali, Singham, Sholay`;
const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });
const result = await model.generateContent(searchQuery);
const response = result.response; 
const text = await response.text();
const getMovies = text.split(",");
const promisedata = getMovies.map((movie) => searchinTMDB(movie));
const tmdbresult = await Promise.all(promisedata);
dispatch(finalGBTpage({ moviesName: getMovies, moviesresult: tmdbresult }));
setLoading(false);
} catch (error) {
setError("Error during AI search: " + error.message);
setLoading(false);
}
};

return (
<div>
<form className="GBTForm" onSubmit={(e) => e.preventDefault()}>
<input
  ref={searchapi}
  type="text"
  placeholder={lang[ln].placeholder1}
  className="inputbox"
/>
<button onClick={handleAIsearch} className="GBTButton">
  {lang[ln].search}
</button>
</form>
<p className="ques">{lang[ln].SWM}</p>
{loading ? (
<h1 className="UI">{lang[ln].load}</h1>
) : (
<>
  <GBTsuggestions />
  {error && <h1>{error}</h1>}
</>
)}
</div>
);
};

export default GBTpage;

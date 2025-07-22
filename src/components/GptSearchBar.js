import React, { useRef } from 'react'
import ai from '../utils/gemini';
import { API_OPTIONS } from '../utils/constants';
import { addGptMovieResult } from '../utils/gptSlice';
import { useDispatch } from 'react-redux';

const GptSearchBar = () => {

    const dispatch=useDispatch();
    const searchText = useRef(null);

    const searchMovieTmdb = async (movie)=>{

        const data= await fetch('https://api.themoviedb.org/3/search/movie?query='+movie+'&include_adult=false&language=en-US&page=1', API_OPTIONS);
        const json = await data.json();
        return json.results;

    }

    const handleGptSearchClick = async() => {
        const query="You are a movie recommendation system. Recommend 5 comma separated movies based on the user's query "+searchText?.current.value+" like the example given below. You must follow the format of the example given below. Example: Hangover, The Dark Knight, Spiderman, Inception,Interstellar";
        console.log(searchText.current.value);
        const gptResults = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: query,
            });
        console.log(gptResults.text);
        const movies=gptResults.text.split(",");
        const promiseArray=movies.map((movie)=>searchMovieTmdb(movie));

        const tmdbResults= await Promise.all(promiseArray);

        console.log(tmdbResults);

        dispatch(addGptMovieResult({movieNames:movies, movieResults:tmdbResults}));
    }

  return (
    <div className='pt-[10%] flex justify-center'>
        <form className='w-1/2 bg-black grid grid-cols-12 ' onSubmit={(e)=>e.preventDefault()}>
            <input ref={searchText} className='p-4 m-4 col-span-9' type='text' placeholder='What would you like to watch today?'/>
            <button className='col-span-3 m-4 py-2 px-4 bg-red-700 text-white rounded-lg' onClick={handleGptSearchClick}>Search</button>
        </form>
    </div>
  )
}

export default GptSearchBar
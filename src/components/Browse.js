import React, { use, useEffect } from 'react'
import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies.js';
import MainContainer from './MainContainer.js';
import SecondaryContainer from './SecondaryContainer.js';
import usePopularMovies from '../hooks/usePopularMovies.js';
import useTopRatedMovies from '../hooks/useTopRatedMovies.js';
import useUpcomingMovies from '../hooks/useUpcomingMovies.js';
import GptSearch from './GptSearch.js';
import { useSelector } from 'react-redux';

const Browse = () => {

  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();

  const showGptSearch=useSelector((store)=>store.gpt.showGptSearchView);
  return (
    <div className='overflow-x-hidden overflow-y-auto [&::-webkit-scrollbar]:hidden scrollbar-width-none' >
      
      <Header/>
      {showGptSearch ? (<GptSearch/>) : (
        <>
          <MainContainer/>
          <SecondaryContainer/>
        </>
      )
      
      }
      
      
    </div>
  )
}

export default Browse
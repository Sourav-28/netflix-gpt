import React from 'react'
import { useSelector } from 'react-redux'
import VideoTitle from './VideoTitle';
import VideoBackground from './VideoBackground';

const MainContainer = () => {
    
  const movies=useSelector((store)=>store.movies?.nowPlayingMovies);
  if(!movies)return null;

  const mainMovie=movies[0]; 
  // console.log(mainMovie);

  const {original_title,overview}=mainMovie;
  return (
    <div className='relative w-screen aspect-video'>
        <VideoTitle title={original_title} overview={overview}/>
        <VideoBackground movieId={mainMovie.id}/>
    </div>
  )
}

export default MainContainer
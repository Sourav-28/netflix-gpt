import React from 'react'
import { IMG_CDN_URL } from '../utils/constants';

const MovieCard = ({posterPath}) => {
  if(!posterPath)return null;
  return (
    // <div className='w-48 pr-4 hover:scale-105 transition-transform duration-200 shadow-md hover:shadow-xl'>
    <div className="min-w-[200px] max-w-[220px] pr-4 hover:scale-105 transition-transform duration-300 shadow-md hover:shadow-xl">
        <img className='rounded-md' alt='movie card' src={IMG_CDN_URL+posterPath}/>
    </div>
  )
}

export default MovieCard
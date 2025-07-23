import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import useMovieTrailer from '../hooks/useMovieTrailer';


const VideoBackground = ({movieId}) => {
    const trailerV=useSelector((store)=>store.movies?.trailerVideo);
    
    useMovieTrailer(movieId);
    console.log(movieId);
    // console.log(trailerV);
  return (
    // <div className='w-screen'>
    // <iframe className="w-screen aspect-video" src={"https://www.youtube.com/embed/"+trailerV?.key + "?&autoplay=1&mute=1"}title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
    // </div>
    <div className="absolute top-0 left-0 w-full h-full -z-10">
      <iframe
        className="w-full h-full object-cover"
        src={`https://www.youtube.com/embed/${trailerV?.key}?autoplay=1&mute=1&controls=0&rel=0&modestbranding=1&showinfo=0`}
        title="YouTube video player"
        frameBorder="0"
        allow="autoplay; encrypted-media; fullscreen"
        allowFullScreen
      ></iframe>
    </div>
  )
}
// "?si=fYH6gJCcOMK3fYXe" 
export default VideoBackground
import React, { useEffect } from 'react'
import { API_OPTIONS } from '../utils/constants';

const VideoBackground = (movieId) => {

    const getMovieVideo=async()=>{
        const data=await fetch('https://api.themoviedb.org/3/movie/1087192/videos?language=en-US', API_OPTIONS)
        const json=await data.json();
        console.log(json);

        const trailer=json.results.filter((video)=>video.type==='Trailer' && video.name==='Official Trailer');
        if(trailer.length===0){
            trailer=json.results[0];
        };
        console.log(trailer);
    }
    useEffect(()=>{
        getMovieVideo();
    },[])

  return (
    <div>
    <iframe width="560" height="315" src="https://www.youtube.com/embed/22w7z_lT6YM?si=Knur9Z_E0LvHcETO" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
    </div>
  )
}

export default VideoBackground
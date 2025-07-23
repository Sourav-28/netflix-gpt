import { useDispatch, useSelector } from 'react-redux';
import { addTrailerVideo } from '../utils/movieSlice';
import { API_OPTIONS } from '../utils/constants';
import { useEffect } from 'react';

const useMovieTrailer=(movieId)=>{
    // const [movieTrailer,setmovieTrailer]=React.useState(null); OR reduc store
    const dispatch=useDispatch();
    
    const movieTrailer=useSelector((store)=>store.movies.trailerVideo);
        //fetching tailer video and uptading store with data
    const getMovieVideo=async()=>{
        const data=await fetch('https://api.themoviedb.org/3/movie/'+movieId+'/videos?language=en-US', API_OPTIONS)
        const json=await data.json();
        // console.log(json);

        let trailer=json.results.find((video)=>video.type==='Trailer' && video.name==='Official Trailer');
        if(trailer.length===0){
            trailer=json.results[0];
        };
        // console.log(trailer);
        dispatch(addTrailerVideo(trailer));

    }
    useEffect(()=>{
        !movieTrailer && getMovieVideo();
    },[])
}

export default useMovieTrailer;
import { useDispatch, useSelector } from 'react-redux';
import { addNowPlayingMovies } from '../utils/movieSlice';
import { API_OPTIONS } from '../utils/constants';
import { useEffect } from 'react';

const useNowPlayingMovies = () => {
  const dispatch=useDispatch();

  const nowPlayingMovies=useSelector((store)=>store.movies.nowPlayingMovies);

  const getNowPlayngMovies = async ()=>{
    const data=await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_OPTIONS);
    const json=await data.json();
    // console.log(json.results);
    dispatch(addNowPlayingMovies(json.results));
  }

  useEffect(()=>{
    if(!nowPlayingMovies) getNowPlayngMovies();
  },[])

}

export default useNowPlayingMovies;
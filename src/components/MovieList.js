import React, { useRef } from 'react'
import MovieCard from './MovieCard'

const MovieList = ({title,movies}) => {
    console.log(movies);

    const scrollRef = useRef();

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -400, behavior: 'smooth' });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 400, behavior: 'smooth' });
  };

    if (!movies || movies.length === 0) return null;

  return (
    // <div className='px-6'>
    //     <h1 className='text-2xl font-semibold text-white border-l-4 border-red-600 pl-4 my-4'>{title}</h1>
    //     <div className='flex overflow-x-scroll [scrollbar-width:none] [&::-webkit-scrollbar]:hidden'>
            
    //         <div className='flex space-x-4'>
    //             {movies?.map((movie,index)=> <MovieCard key={index} posterPath={movie.poster_path}/>)}
                
    //         </div>
    //     </div>
        
    // </div>
    <div className="relative px-6 my-8">
      <h2 className="text-2xl font-semibold text-white border-l-4 border-red-600 pl-4 my-4">
        {title}
      </h2>

      {/* Scroll buttons */}
      <button
        onClick={scrollLeft}
        className="absolute left-2 top-[55%] z-10 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-80 transition hidden md:block"
      >
        ◀
      </button>

      <button
        onClick={scrollRight}
        className="absolute right-2 top-[55%] z-10 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-80 transition hidden md:block"
      >
        ▶
      </button>

      {/* Scrollable row */}
      <div
        ref={scrollRef}
        className="flex overflow-x-scroll space-x-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {movies.map((movie, index) => (
          <MovieCard key={index} posterPath={movie.poster_path} />
        ))}
      </div>
    </div>
  )
}

export default MovieList
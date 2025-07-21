import React, { useRef } from 'react'
import ai from '../utils/gemini';

const GptSearchBar = () => {

    const searchText = useRef(null);

    
    const handleGptSearchClick = async() => {
        const query="You are a movie recommendation system. Recommend 5 comma separated movies based on the user's query "+searchText?.current.value+" like the example given below. You must follow the format of the example given below. Example: Hangover, The Dark Knight, Spiderman, Inception,Interstellar";
        console.log(searchText.current.value);
        const gptResults = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: query,
            });
        console.log(gptResults.text);
    }

  return (
    <div className='pt-[10%] flex justify-center'>
        <form className='w-1/2 bg-black grid grid-cols-12 ' onSubmit={(e)=>e.preventDefault()}>
            <input ref={searchText} className='p-4 m-4 col-span-9' type='text' placeholder='What would you like to watch today?'/>
            <button className='col-span-3 py-2 px-4 bg-red-700 text-white rounded-lg' onClick={handleGptSearchClick}>Search</button>
        </form>
    </div>
  )
}

export default GptSearchBar
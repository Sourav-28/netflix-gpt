import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    // <div className='w-screen aspect-video pt-[20%] px-24 absolute text-white bg-gradient-to-r from-black'>
    //     <h1 className='text-6xl font-bold'>{title}</h1>
    //     <p className='inline-block py-6 text-lg w-1/4'>{overview}</p>
    //     <div>
    //         <button className='bg-white text-black py-4 px-12 text-xl rounded-lg hover:bg-opacity-80'>Play</button>
    //         <button className='mx-2 bg-gray-500 text-white p-4 px-12 text-xl bg-opacity-50 rounded-lg'>More Info</button>
    //     </div>
    // </div>
    <div className="absolute top-1/4 left-16 text-white max-w-lg space-y-4">
      <h1 className="text-5xl font-extrabold drop-shadow-lg">{title}</h1>
      <p className="text-lg drop-shadow-md">{overview}</p>
      <div className="flex space-x-4">
        <button className="bg-white text-black py-2 px-6 text-lg font-semibold rounded-md hover:bg-opacity-80 transition">Play</button>
        <button className="bg-gray-600 text-white py-2 px-6 text-lg font-semibold rounded-md bg-opacity-60 hover:bg-opacity-90 transition">More Info</button>
      </div>
    </div>
  )
}

export default VideoTitle
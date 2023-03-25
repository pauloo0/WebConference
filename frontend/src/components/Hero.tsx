import React from 'react'

function Hero() {
  return (
    <header className='bg-hero bg-scroll bg-center bg-cover bg-no-repeat text-white'>
      <div className='h-screen flex flex-col justify-center items-center bg-gray-900 bg-opacity-70'>
        <p className='text-5xl font-playfairDisplay'>Vamos celebrar a Web!</p>
        <p className='mt-8 text-8xl uppercase font-bold'>WebConference</p>
        <button className='mt-12 px-6 py-4 rounded-md bg-sky-600 hover:bg-sky-700 focus:bg-sky-700 font-bold'>
          Inscrever
        </button>
      </div>
    </header>
  )
}

export default Hero

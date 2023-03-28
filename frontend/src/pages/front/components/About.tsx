import React from 'react'
import { FaGlobe, FaLaptop } from 'react-icons/fa'

function About() {
  return (
    <section
      id='about'
      className='px-12 flex flex-col justify-between items-center text-slate-800'
    >
      <div id='about-title'>
        <h1 className='mt-24 uppercase font-bold text-3xl text-center'>
          sobre
        </h1>
        <h3 className='mt-4 font-playfairDisplay text-center'>
          Conferência sobre a Web a decorrer no dia <b>22 de maio de 2023</b>,
          no <b>Pavilhão da Web</b>, Porto
        </h3>
      </div>
      <div id='about-info' className='w-full mt-12 flex justify-around'>
        <div className='max-w-[550px] flex flex-col justify-center items-center'>
          <div className='w-24 h-24 rounded-full bg-slate-800 text-white grid place-items-center'>
            <FaGlobe className='text-5xl' />
          </div>
          <h2 className='mt-4 mb-2 text-xl font-bold'>Computação Ubíqua</h2>
          <p className='text-gray-500 text-center'>
            Expandir a Web para fora do computador e ligá-la à Internet das
            Coisas!
          </p>
        </div>

        <div className='max-w-[550px] flex flex-col justify-center items-center'>
          <div className='w-24 h-24 rounded-full bg-slate-800 text-white grid place-items-center'>
            <FaLaptop className='text-5xl' />
          </div>
          <h2 className='mt-4 mb-2 text-xl font-bold'>Responsividade</h2>
          <p className='text-gray-500 text-center'>
            Adaptar as aplicações Web a múltiplos dispositivos e torná-las mais
            responsivas em termos de performance!
          </p>
        </div>
      </div>
    </section>
  )
}

export default About

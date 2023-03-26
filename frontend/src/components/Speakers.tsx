import React from 'react'
import { FaTwitter, FaFacebook, FaLinkedin } from 'react-icons/fa'

//TODO Not using the API to fetch the speakers
//TODO Check from page 142 of the book

function Speakers() {
  return (
    <section
      id='speakers'
      className='px-32 flex flex-col justify between items-center text-slate-800'
    >
      <div id='speakers-title' className='mt-24'>
        <h1 className='mt-24 uppercase font-bold text-3xl text-center'>
          Oradores
        </h1>
        <h3 className='mt-4 font-playfairDisplay text-center'>
          Especialistas internacionais do mundo da Web.
        </h3>
      </div>

      <div id='speakers-info' className='grid grid-cols-3 mt-12 w-full'>
        {/* Speaker 1 */}
        <div className='flex flex-col justify-center items-center'>
          <div className='bg-speaker1 bg-cover bg-no-repeat w-52 h-52 rounded-full' />
          <h2 className='mt-4 text-lg font-bold'>John Davies</h2>
          <h3 className='text-sm'>Lead Designer</h3>
          <div className='mt-4 w-1/5 flex justify-between'>
            <a
              href='https://twitter.com'
              target='_blank'
              className='bg-slate-800 p-2 rounded-full text-white'
            >
              <FaTwitter />
            </a>
            <a
              href='https://facebook.com'
              target='_blank'
              className='bg-slate-800 p-2 rounded-full text-white'
            >
              <FaFacebook />
            </a>
            <a
              href='https://linkedin.com'
              target='_blank'
              className='bg-slate-800 p-2 rounded-full text-white'
            >
              <FaLinkedin />
            </a>
          </div>
        </div>

        {/* Speaker 2 */}
        <div className='flex flex-col justify-center items-center'>
          <div className='bg-speaker2 bg-cover bg-no-repeat w-52 h-52 rounded-full' />
          <h2 className='mt-4 text-lg font-bold'>Larry Parker</h2>
          <h3 className='text-sm'>Lead Marketer</h3>
          <div className='mt-4 w-1/5 flex justify-between'>
            <a
              href='https://twitter.com'
              target='_blank'
              className='bg-slate-800 p-2 rounded-full text-white'
            >
              <FaTwitter />
            </a>
            <a
              href='https://facebook.com'
              target='_blank'
              className='bg-slate-800 p-2 rounded-full text-white'
            >
              <FaFacebook />
            </a>
            <a
              href='https://linkedin.com'
              target='_blank'
              className='bg-slate-800 p-2 rounded-full text-white'
            >
              <FaLinkedin />
            </a>
          </div>
        </div>

        {/* Speaker 3 */}
        <div className='flex flex-col justify-center items-center'>
          <div className='bg-speaker3 bg-cover bg-no-repeat w-52 h-52 rounded-full' />
          <h2 className='mt-4 text-lg font-bold'>Diana Petersen</h2>
          <h3 className='text-sm'>Lead Developer</h3>
          <div className='mt-4 w-1/5 flex justify-between'>
            <a
              href='https://twitter.com'
              target='_blank'
              className='bg-slate-800 p-2 rounded-full text-white'
            >
              <FaTwitter />
            </a>
            <a
              href='https://facebook.com'
              target='_blank'
              className='bg-slate-800 p-2 rounded-full text-white'
            >
              <FaFacebook />
            </a>
            <a
              href='https://linkedin.com'
              target='_blank'
              className='bg-slate-800 p-2 rounded-full text-white'
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>

      <div
        id='speakers-footer'
        className='mt-16 text-center font-playfairDisplay'
      >
        Oradores de grande qualidade que irão partilhar as últimas tendências do
        mundo do desenvolvimento para a Web!
      </div>
    </section>
  )
}

export default Speakers

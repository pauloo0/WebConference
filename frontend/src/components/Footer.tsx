import React from 'react'
import { FaTwitter, FaFacebook, FaLinkedin } from 'react-icons/fa'

function Footer() {
  return (
    <footer className='mt-24 px-32 h-12 flex justify-between items-center text-slate-800'>
      <p>Copyright &copy; WebConference 2023</p>
      <div className='flex justify-around text-white'>
        <a
          href='https://twitter.com'
          className='m-1 w-8 h-8 rounded-full bg-slate-800 grid place-items-center'
        >
          <FaTwitter />
        </a>
        <a
          href='https://facebook.com'
          className='m-1 w-8 h-8 rounded-full bg-slate-800 grid place-items-center'
        >
          <FaFacebook />
        </a>
        <a
          href='https://linkedin.com'
          className='m-1 w-8 h-8 rounded-full bg-slate-800 grid place-items-center'
        >
          <FaLinkedin />
        </a>
      </div>
    </footer>
  )
}

export default Footer

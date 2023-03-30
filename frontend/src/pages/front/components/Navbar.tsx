import React from 'react'

function Navbar() {
  return (
    <nav className='fixed top-0 w-full h-12 px-32 flex justify-between items-center text-white tracking-wide'>
      <a href='#page_top' className='text-2xl text-gray-300'>
        WebConference
      </a>
      <ul className='flex decoration-none uppercase'>
        <a href='#about' className='mr-4'>
          <li>Sobre</li>
        </a>
        <a href='#speakers' className='mx-4'>
          <li>Speakers</li>
        </a>
        <a href='#sponsors' className='mx-4'>
          <li>Sponsors</li>
        </a>
        <a href='#contacts' className='mx-4'>
          <li>Contacts</li>
        </a>
        <a href='/admin' className='ml-4 text-gray-500'>
          <li>Área Privada</li>
        </a>
      </ul>
    </nav>
  )
}

export default Navbar

import React from 'react'
import { useNavigate } from 'react-router-dom'
import { FaBars } from 'react-icons/fa'

function Topbar() {
  const navigate = useNavigate()
  const handleLogout = () => {
    navigate('/')
  }

  return (
    <div className='fixed top-0 w-full z-10 h-12 px-8 text-white bg-slate-700 flex justify-between items-center'>
      <div className='flex items-center justify-center'>
        <p className='mr-2 text-lg'>WebConference Admin</p>
        <FaBars
          className='p-0.5 cursor-pointer text-2xl hover:text-sky-300 focus:text-sky-300'
          onClick={() => console.log('hello')}
        />
      </div>
      <button
        className='px-2 py-1 rounded-sm bg-sky-600 hover:bg-sky-700 focus:bg-sky-700'
        onClick={handleLogout}
      >
        Logout
      </button>
    </div>
  )
}

export default Topbar

import React from 'react'
import { useNavigate } from 'react-router-dom'
import { FaBars } from 'react-icons/fa'

interface TopbarProps {
  onToggleSidebar: () => void
}

function Topbar({ onToggleSidebar }: TopbarProps) {
  const navigate = useNavigate()
  const handleLogout = () => {
    navigate('/')
  }

  return (
    <section className='flex items-center justify-between bg-gray-800 text-white h-12 px-4'>
      <div className='flex items-center'>
        <p className='text-xl mr-2'>WebConference</p>
        <button onClick={onToggleSidebar}>
          <FaBars className='p-0.5 cursor-pointer text-2xl hover:text-sky-300 focus:text-sky-300' />
        </button>
      </div>
      <button
        className='px-2 py-1 rounded-sm bg-sky-600 hover:bg-sky-700 focus:bg-sky-700'
        onClick={handleLogout}
      >
        Logout
      </button>
    </section>
  )
}

export default Topbar

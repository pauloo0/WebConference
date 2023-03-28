import React from 'react'
import { BsMegaphoneFill, BsCashCoin } from 'react-icons/bs'
import { FaUsers } from 'react-icons/fa'

function Sidebar() {
  const size: number = 200

  return (
    <div
      className={`w-[${size}px] h-screen fixed left-0 bg-slate-800 text-white`}
    >
      <div className='mt-12'>
        <ul className='w-full'>
          <li className='p-4 cursor-pointer hover:bg-slate-900 flex items-center'>
            <FaUsers className='mr-2' />
            {size > 50 && <span>Participantes</span>}
          </li>
          <li className='p-4 cursor-pointer hover:bg-slate-900 flex items-center'>
            <BsMegaphoneFill className='mr-2' />
            {size > 50 && <span>Oradores</span>}
          </li>
          <li className='p-4 cursor-pointer hover:bg-slate-900 flex items-center'>
            <BsCashCoin className='mr-2' />
            {size > 50 && <span>Sponsors</span>}
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Sidebar

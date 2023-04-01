import React from 'react'
import { BsMegaphoneFill, BsCashCoin } from 'react-icons/bs'
import { FaUsers } from 'react-icons/fa'

interface SidebarProps {
  isExpanded: boolean
}

function Sidebar({ isExpanded }: SidebarProps) {
  const width = isExpanded ? 'w-48' : 'w-14'

  return (
    <section
      className={`bg-gray-700 h-screen ${width} transition-width ease-in-out duration-300`}
    >
      <ul className={`overflow-hidden flex flex-col mt-4 text-gray-200`}>
        <a href='/admin/participantes'>
          <li className='flex items-center p-4 hover:bg-gray-800 cursor-pointer'>
            <FaUsers className={`mr-2 ${isExpanded ? '' : 'text-lg'}`} />
            <span>{isExpanded ? 'Participantes' : ''}</span>
          </li>
        </a>
        <a href='/admin/oradores'>
          <li className='flex items-center p-4 hover:bg-gray-800 cursor-pointer'>
            <BsMegaphoneFill className='mr-2' />
            {isExpanded && <span>Oradores</span>}
          </li>
        </a>
        <a href='/admin/sponsors'>
          <li className='flex items-center p-4 hover:bg-gray-800 cursor-pointer'>
            <BsCashCoin className='mr-2' />
            {isExpanded && <span>Sponsors</span>}
          </li>
        </a>
      </ul>
    </section>
  )
}

export default Sidebar

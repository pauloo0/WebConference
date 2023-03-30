import React, { useState } from 'react'
import Topbar from './components/Topbar'
import Sidebar from './components/Sidebar'
import Footer from './components/Footer'
import { BsTrashFill } from 'react-icons/bs'

function Attendants() {
  const [isSidebarExpanded, setIsSidebarExpanded] = useState<boolean>(true)

  return (
    <section className='flex flex-col h-screen'>
      <Topbar
        onToggleSidebar={() => setIsSidebarExpanded(!isSidebarExpanded)}
      />
      <div className='flex flex-1 overflow-y-scroll'>
        <Sidebar isExpanded={isSidebarExpanded} />
        <main className='flex-1'>This is the main content</main>
      </div>
      <Footer />
    </section>
  )
}

export default Attendants

import React, { useState } from 'react'
import Topbar from './components/Topbar'
import Sidebar from './components/Sidebar'
import Footer from './components/Footer'
import { Participants } from './Participants'
import { Speakers } from './Speakers'
import { Sponsors } from './Sponsors'

interface PageMap {
  [key: string]: React.FC
}

const pages: PageMap = {
  participantes: Participants,
  oradores: Speakers,
  sponsors: Sponsors,
}

interface MainProps {
  content: string
}

function Admin({ content }: MainProps) {
  const [isSidebarExpanded, setIsSidebarExpanded] = useState<boolean>(true)

  const Content = pages[content]

  return (
    <section className='flex flex-col h-screen'>
      <Topbar
        onToggleSidebar={() => setIsSidebarExpanded(!isSidebarExpanded)}
      />
      <div className='flex flex-1 overflow-y-scroll'>
        <Sidebar isExpanded={isSidebarExpanded} />
        <main className='flex-1 bg-gray-100'>
          <Content />
        </main>
      </div>
      <Footer />
    </section>
  )
}

export default Admin

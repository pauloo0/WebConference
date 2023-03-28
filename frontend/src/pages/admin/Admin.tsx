import React, { useState } from 'react'
import Topbar from './components/Topbar'
import Sidebar from './components/Sidebar'
import Footer from './components/Footer'

function Admin() {
  const [sidebarSize, setSidebarSize] = useState<number>(200)

  return (
    <>
      <Topbar />
      <section className='flex flex-col justify-center text-slate-800'>
        <div className='flex'>
          <Sidebar />
          <main className={`fixed left-[200px] top-12 px-20 mt-32`}>
            Main
            <Footer />
          </main>
        </div>
      </section>
    </>
  )
}

export default Admin

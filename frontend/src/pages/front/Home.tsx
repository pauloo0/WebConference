import About from './components/About'
import Contacts from './components/Contacts'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Speakers from './components/Speakers'
import Sponsors from './components/Sponsors'

function Home() {
  return (
    <div className='font-montserrat'>
      <Navbar />
      <Hero />
      <About />
      <Speakers />
      <Sponsors />
      <Contacts />
      <Footer />
    </div>
  )
}

export default Home

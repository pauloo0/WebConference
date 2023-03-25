import Contacts from './components/Contacts'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Speakers from './components/Speakers'
import Sponsors from './components/Sponsors'

function App() {
  return (
    <div className='font-montserrat'>
      <Navbar />
      <Hero />
      <Speakers />
      <Sponsors />
      <Contacts />
      <Footer />
    </div>
  )
}

export default App
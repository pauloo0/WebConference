import Home from './pages/front/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Participantes from './pages/admin/Attendants'

function App() {
  return (
    <div className='font-montserrat'>
      <BrowserRouter>
        <Routes>
          <Route path='*' element={<Home />} />
          <Route path='/admin/*' element={<Participantes />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App

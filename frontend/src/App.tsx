import Home from './pages/front/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Admin from './pages/admin/Admin'

function App() {
  return (
    <div className='font-montserrat'>
      <BrowserRouter>
        <Routes>
          <Route path='*' element={<Home />} />
          <Route path='/admin/*' element={<Admin />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App

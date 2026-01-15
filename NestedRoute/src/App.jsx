import React from 'react'
import Navbar from './Components/Navbar'
import Navbar2 from './Components/Navbar2'
import Footer from './Components/Footer'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Product from './Pages/Product'
import Notfound from './Pages/Notfound'
import Mens from './Pages/Mens'
import Women from './Pages/Women'
import Cources from './Pages/Cources'
import CourcesDetales from './Pages/CourcesDetales'

const App = () => {
  return (
    <div className='h-screen bg-black text-white'>

      <Navbar />
      <Navbar2 />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/About' element={<About />} />
        <Route path='/Contact' element={<Contact />} />
        <Route path='/Product' element={<Product />} >
          <Route path='Mens' element={<Mens />} />
          <Route path='Women' element={<Women />} />
        </Route>
        <Route path='/Cources' element={<Cources />} />
        <Route path='/Cources/:id' element={<CourcesDetales />} />

        <Route path='*' element={<Notfound />} />

      </Routes>
      <Footer />

    </div>
  )
}

export default App

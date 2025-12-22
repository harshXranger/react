import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
import Contact from './pages/Contact'
import Top from './components/Top'
import Product from './pages/Product'
const App = () => {
  return (
        
    <div>
      <div>
        <Top/>
      </div>
      
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/aboutus' element={<AboutUs />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/product' element={<Product/>}/>
      </Routes>
    </div>
  )
}

export default App

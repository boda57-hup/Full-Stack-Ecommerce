import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Collection from './Pages/Collection'
import About from './Pages/About'
import Content from './Pages/Content'
import Product from './Pages/Product'
import Card from './Pages/Card'
import Login from './Pages/Login'
import PlaceOrder from './Pages/PlaceOrder'
import Orders from './Pages/Orders'
import Navbar from './Componants/Navbar'
import Footer from './Componants/Footer'

const App = () => {
  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
      
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/collection' element={<Collection/>} />
        <Route path='/About' element={<About/>} />
        <Route path='/contect' element={<Content/>} />
        <Route path='/card' element={<Card/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/placeOrder' element={<PlaceOrder/>} />
        <Route path='/orders' element={<Orders/>} />
        <Route path='/product/:productId' element={<Product/>} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App

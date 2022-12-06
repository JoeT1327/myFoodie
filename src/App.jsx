import React from 'react'
import './index.css'
import { Route, Routes } from 'react-router-dom'
import Meals from './Meals'
import Details from './Details'
import Navbar from './Navbar'

const App = () => {
  return (
    <div className=' container mx-auto my-8'>
      
    <Navbar/>

    <Routes>
      <Route path='/' element={<Meals/>}></Route>
      <Route path="/details/:id" element={<Details/>}></Route>
    </Routes>


    </div>
  )
}

export default App
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Chapters from './pages/Chapters'
import { Toaster } from 'react-hot-toast'
import Chapter from './pages/Chapter'
import Sloks from './pages/Sloks'

const App = () => {
  return (
    <>
    <Navbar/>
    <Toaster/>
        <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/chapters' element={<Chapters/>} />
        <Route path='/chapter/:id' element={<Chapter/>} />
        <Route path='/sloks/:id/:verse' element={<Sloks/>} />
        </Routes>
    </>
  )
}

export default App

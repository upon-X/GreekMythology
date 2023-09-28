import React, { useState } from 'react'
import './App.css'
import Home from './components/Home/Home'
import { Route, Routes } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
import Footer from './components/Footer/Footer'
import { LanguageProvider } from './components/LanguageChange'
import Characters from './components/Characters/Characters'
import Regions from './components/Regions/Regions'

function App() {

  return (
    <>
      <LanguageProvider>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/characters' element={<Characters />} />
          <Route path='/regions' element={<Regions />} />
        </Routes>
        <Footer />
      </LanguageProvider>
    </>
  )
}

export default App

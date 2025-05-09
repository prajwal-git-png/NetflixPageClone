import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import MovieList from './components/MovieList'
import Footer from './components/Footer'

import './App.css'

function App() {
  return (
    <div className="container">
      <Navbar />
      <Hero />
      <MovieList />
      <Footer />
    </div>
  )
}

export default App

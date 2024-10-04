import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './pages/Layout'
import Home from './pages/Home'
import Movie from './pages/Movie'
import Series from './pages/Series'
import Anime from './pages/Anime'
import Books from './pages/Books'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home/>} />
          <Route path='/movies/:id' element={<Movie />} />
          <Route path='/series/:id' element={<Series />} />
          <Route path='/animes/:id' element={<Anime />} />
          <Route path='/books/:id' element={<Books />} />
          
          <Route path='/movies' element={<Movie />} />
          <Route path='/series' element={<Series />} />
          <Route path='/animes' element={<Anime />} />
          <Route path='/books' element={<Books />} />
        </Route>
        
      </Routes>
    </BrowserRouter>
  )
}

export default App
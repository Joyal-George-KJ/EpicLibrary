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
          <Route path='/movie/:id' element={<Movie />} />
          <Route path='/series/:id' element={<Series />} />
          <Route path='/anime/:id' element={<Anime />} />
          <Route path='/book/:id' element={<Books />} />
          
          <Route path='/movie' element={<Movie />} />
          <Route path='/series' element={<Series />} />
          <Route path='/anime' element={<Anime />} />
          <Route path='/book' element={<Books />} />
        </Route>
        
      </Routes>
    </BrowserRouter>
  )
}

export default App
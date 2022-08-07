import React from 'react'
import { Route , Routes } from 'react-router-dom'
import "./App.css"
import { Box } from '@mui/system'
import Home from './pages/Home'
import ExerciseDetail from './pages/ExerciseDetail'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

export const App = () => {
  return (
    <Box width="400px" sx={{width:{xl:"1488px"}}} m="auto">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/exercise/:id" element={<ExerciseDetail />}/>
      </Routes>
      <Footer/>
    </Box>
  )
}

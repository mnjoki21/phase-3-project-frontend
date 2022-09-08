import React from 'react'
import {Route , Routes} from 'react-router-dom'
import About from './pages/About'
import Customers from './pages/Customers'
import NavBar from './pages/NavBar'
import Home from './pages/Home'
import Purchases from './pages/Purchases'
import Books from './pages/Books'



function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route exact path='/' element={ <Home /> } />
        <Route exact path='/purchases' element={ <Purchases /> } />
        <Route exact path='/customers' element={ <Customers /> } />
        <Route exact path='/books' element={ <Books/> } />
        <Route exact path='/about' element={ <About /> } />
        
      </Routes>

    </>
  )
}

export default App

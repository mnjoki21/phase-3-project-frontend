import React from 'react'
import { BrowserRouter as Router, Route , Routes} from 'react-router-dom'
import About from './pages/About'
import Customers from './pages/Customers'
import NavBar from './pages/NavBar'
import Home from './pages/Home'
import Purchases from './pages/Purchases'
import Books from './pages/Books'
import './Navbar.css'
import './Home.css'



function App() {
  return (
    <>
   
      <Router >
        <NavBar />
      <Routes>
        <Route exact path='/' element={ <Home /> } />
        <Route exact path='/purchases' element={ <Purchases /> } />
        <Route exact path='/customers' element={ <Customers /> } />
        <Route exact path='/books' element={ <Books/> } />
        <Route exact path='/about' element={ <About /> } />
        
        </Routes>
        </Router>

    </>
  )
}

export default App

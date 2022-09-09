import React from 'react'
import { BrowserRouter as Router, Route , Routes} from 'react-router-dom'
import About from './About'
import Customers from './Customers'
import NavBar from './NavBar'
import Home from './Home'
import Purchases from './Purchases'
import Books from './Books'
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

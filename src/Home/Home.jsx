import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import { NavBar, HomePage } from "../components/index.jsx"
function Home() {

  return (
    <div >
        <NavBar/>
        <HomePage/>
      
    </div>
  )
}

export default Home
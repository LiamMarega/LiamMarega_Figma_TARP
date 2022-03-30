import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home/Home.jsx"
function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App

import React from 'react'
import Landing from './Pages/Landing'
import About from './Pages/About'
import Footer from './Pages/Footer'
import Find from './Pages/Find'
import Companies from './Pages/Companies'
import Navbar from './component/Navbar'

function App() {
  return (
    <div>
    <Navbar/>
      <Landing/>
      <About/>
      <Find/>
      <Companies/>
      <Footer/>
    </div>
  )
}

export default App


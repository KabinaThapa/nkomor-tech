import { useState } from 'react'

import './App.css'
import Navbar from './components/navbar'
import Footer from './components/footer'
import Sidenav from './components/sidenav'

function App() {
 

  return (
    <>
      <div>
       <Navbar/>
       <Sidenav/>
       <Footer/>
      </div>
     
    </>
  )
}

export default App

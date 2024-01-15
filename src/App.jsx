import { useState } from 'react'

import './App.css'
import Navbar from './components/navbar'
import Footer from './components/footer'
import Sidenav from './components/sidenav'
import HomepageA from './pages/homepageA'

function App() {
 

  return (
    <>
     <div className='relative font-poppins z-0'>
     <HomepageA/>

     </div>
    </>
  )
}

export default App

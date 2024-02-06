import { useState } from 'react'

import './App.css'
import Navbar from './components/navbar'
import Footer from './components/footer'
import Sidenav from './components/sidenav'
import HomepageA from './pages/homepageA'
import ChooseSpeciality from './components/chooseSpeciality'
import TimeSlot from './components/timeSlot'
import Facilities from './components/facilities'
function App() {
 

  return (
    <>
     <div className='relative font-poppins z-0 '>
     <HomepageA/>
     <ChooseSpeciality/>
<TimeSlot/>
<Facilities/>
     </div>
    </>
  )
}

export default App

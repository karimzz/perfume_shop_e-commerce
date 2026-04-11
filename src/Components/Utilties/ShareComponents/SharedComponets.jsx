import React from 'react'
import NavBar from '../NavBar/NavBar'
import { Outlet } from 'react-router-dom'
import TopBar from '../TopBar/TopBar'
import Footer from '../Footer/Footer'


const SharedComponets = () => {
  return (
    <main>
        <TopBar/>
        <NavBar />
        <Outlet />
        <Footer />
    </main>
  )
}

export default SharedComponets

import React from 'react'
import NavBar from '../NavBar/NavBar'
import { Outlet } from 'react-router-dom'
import TopBar from '../TopBar/TopBar'


const SharedComponets = () => {
  return (
    <main>
        <TopBar/>
        <NavBar />
        <Outlet />
    </main>
  )
}

export default SharedComponets


import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import SharedComponets from './Components/Utilties/ShareComponents/SharedComponets'
import HomePage from './Pages/Home/HomePage'
import React from "react";


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>

          <Route path='/' element={<SharedComponets />}>
            <Route index element={<HomePage />} />
          </Route>

          <Route path='login' />
          <Route path='signup' />
          <Route path="*" />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

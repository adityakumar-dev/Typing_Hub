
import { useEffect, useState } from 'react';
import './App.scss'
import AppParagraph from './components/ParaGraph'
import AppNavbar from './components/NavBar';
import AppFooter from './components/Footer';
function App() {


  return (
    <>
      <div className="container-fluid bg-primary  min-vh-100 d-flex flex-column">
        <AppNavbar />
        <AppParagraph />

      </div>

    </>
  )
}

export default App

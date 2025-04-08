import { useState } from 'react'
import './App.css'
import Portfolio from './Component/Portfollio.jsx'
import ScrollToTopButton from "./Component/ScrollToTopButton.jsx";
import Footer from "./Component/Footer";
function App() {
  return (
    <>
        <Portfolio/>
        <ScrollToTopButton />
        <Footer />

    </>
  )
}

export default App

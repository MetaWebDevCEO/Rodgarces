import { useState } from 'react'
import Navbar from './components/navbar'
import Hero from './components/hero'
import Banner from './components/Banner'
import Soy from './components/Soy'
import Services from './components/Services'
import Support from './components/Support'
import Footer from './components/Footer'

import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Hero />
      <Banner />
      <Soy />
      <Services />
      <Support />
      <Footer />

    </>
  )
}

export default App

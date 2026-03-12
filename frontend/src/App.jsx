import { useState } from 'react'
import Home from './features/home/Pages/Home'
import Navbar from './components/layout/navbar/Navbar'
import Footer from './components/layout/footer/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Navbar />
        <Home />
        <Footer />
      </div>
    </>
  )
}

export default App

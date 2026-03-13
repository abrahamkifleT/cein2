import { useState } from 'react'
import Home from './features/home/Pages/Home'
import Navbar from './components/layout/navbar/Navbar'
import Footer from './components/layout/footer/Footer'
import { CollectionProvider } from './contexts/collection.context'
import { ProductProvider } from './contexts/product.context'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Navbar />
        <CollectionProvider>
          <ProductProvider>
            <Home />
          </ProductProvider>
        </CollectionProvider>
        <Footer />
      </div>
    </>
  )
}

export default App

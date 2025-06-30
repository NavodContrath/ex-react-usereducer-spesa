import './App.css'
import CartList from './components/CartList'
import ProductList from './components/ProductList'
import { useState } from 'react'


function App() {
  const [addedProducts, setAddedProducts] = useState([])
  console.log(addedProducts)

  return (
    <>
      <ProductList setAddedProducts={setAddedProducts} />
      <CartList addedProducts={addedProducts} />
    </>
  )
}

export default App

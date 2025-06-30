import './App.css'
import CartList from './components/CartList'
import ProductList from './components/ProductList'
import { useReducer } from 'react'

function cartReducer(state, action) {
  switch (action.type) {
    case 'ADD_ITEM':
      const foundItem = state.find(p => p.name === action.item.name)
      if (foundItem) {
        return state.map(p => p.name === action.item.name ? { ...p, quantity: p.quantity + 1 } : p)
      } else {
        return [...state, { ...action.item, quantity: 1 }]
      }
      break;
    case 'REMOVE_ITEM':
      return state.filter(p => p.name !== action.item.name)
      break;
    case 'UPDATE_QUANTITY':
      return state.map(p => p.name === action.name ? { ...p, quantity: Number(action.value) } : p)
      break;
    default:
      return state;
  }
}

function App() {
  const [addedProducts, dispatch] = useReducer(cartReducer, [])

  return (
    <>
      <ProductList dispatch={dispatch} />
      <CartList addedProducts={addedProducts} dispatch={dispatch} />
    </>
  )
}

export default App

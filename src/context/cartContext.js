import { useReducer, createContext, useContext, useEffect } from 'react'
import cartReducer, { CART_ACTIONS } from '../reducer/cartReducer'

const getSavedCartItem = () => {
  const data = localStorage.getItem('cart-item')
  return data.length === 0 ? [] : JSON.parse(data)
}

const initialState = {
  cartItems: getSavedCartItem(),
  totalItems: '',
  totalPrice: '',
  shippingCharge: '',
}

const CartContext = createContext()

export const useCart = () => useContext(CartContext)

function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, initialState)

  const addToCart = (id, color, amount, product) => {
    dispatch({
      type: CART_ACTIONS.ADD_ITEM_CART,
      payload: { id, color, amount, product },
    })
  }

  const removeItem = (itemId) => {
    dispatch({ type: CART_ACTIONS.REMOVE_ITEM, payload: itemId })
  }

  const increaseAmount = (id) => {
    dispatch({ type: CART_ACTIONS.INCREASE_AMOUNT, payload: id })
  }

  const decreaseAmount = (id) => {
    dispatch({ type: CART_ACTIONS.DECREASE_AMOUNT, payload: id })
  }

  const clearCart = () => {
    dispatch({ type: CART_ACTIONS.CLEAR_CART })
  }

  useEffect(() => {
    localStorage.setItem('cart-item', JSON.stringify(state.cartItems))
  }, [state.cartItems])

  return (
    <CartContext.Provider
      value={{
        ...state,
        addToCart,
        removeItem,
        clearCart,
        increaseAmount,
        decreaseAmount,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export default CartProvider

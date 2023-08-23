import { useContext, createContext, useEffect, useReducer } from 'react'
import axios from 'axios'
import productReducer, { PRODUCTS_ACTIONS } from '../reducer/productReducer'

const API = 'https://api.pujakaitem.com/api/products'
const initialState = {
  isLoading: false,
  isError: false,
  products: [],
  featuredProducts: [],
  isSingleLoading: false,
  singleProduct: {},
}

// context
const ProductContext = createContext()

// provider
const ProductProvider = ({ children }) => {
  const [state, dispatch] = useReducer(productReducer, initialState)

  const getProducts = async (url) => {
    dispatch({ type: PRODUCTS_ACTIONS.SET_LOADING })
    try {
      const res = await axios.get(url)
      dispatch({
        type: PRODUCTS_ACTIONS.SET_PRODUCTS,
        payload: res.data,
      })
    } catch (error) {
      dispatch({ type: PRODUCTS_ACTIONS.SET_ERROR })
    }
  }

  const getSingleProduct = async (url) => {
    dispatch({ type: PRODUCTS_ACTIONS.SET_LOADING })
    try {
      const res = await axios.get(url)
      const product = res.data
      dispatch({
        type: PRODUCTS_ACTIONS.SET_SINGLE_PRODUCT,
        payload: product,
      })
    } catch (error) {
      dispatch({ type: PRODUCTS_ACTIONS.SET_ERROR })
    }
  }

  useEffect(() => {
    getProducts(API)
  }, [])

  return (
    <ProductContext.Provider value={{ ...state, getSingleProduct }}>
      {children}
    </ProductContext.Provider>
  )
}

// custom hook for global context
export const useProduct = () => {
  return useContext(ProductContext)
}

export default ProductProvider

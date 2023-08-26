import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import ProductProvider from './context/productContext'
import FilterProvider from './context/filterContext'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <ProductProvider>
    <FilterProvider>
      <App />
    </FilterProvider>
  </ProductProvider>
)

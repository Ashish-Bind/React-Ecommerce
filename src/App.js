import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Products from './pages/Products'
import Contact from './pages/Contact'
import Cart from './pages/Cart'
import SingleProduct from './pages/SingleProduct'
import { GlobalStyle } from './pages/GlobalStyle'
import { ThemeProvider } from 'styled-components'
import Header from './components/Header'
import Footer from './components/Footer'
import Error from './pages/Error'

const App = () => {
  const theme = {
    colors: {
      heading: 'rgb(24 24 29)',
      text: 'rgba(29 ,29, 29, .8)',
      white: '#fff',
      black: ' #212529',
      helper: '#8490ff',

      bg: '#F6F8FA',
      footer_bg: '#0a1435',
      btn: 'rgb(98 84 243)',
      border: 'rgba(98, 84, 243, 0.5)',
      hr: '#ffffff',
      gradient:
        'linear-gradient(0deg, rgb(132 144 255) 0%, rgb(98 189 252) 100%)',
      shadow:
        'rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;',
      shadowSupport: ' rgba(0, 0, 0, 0.16) 0px 1px 4px',
    },
    media: {
      mobile: '768px',
      tab: '998px',
    },
  }

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <GlobalStyle />
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/products" element={<Products />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/singleproduct/:id" element={<SingleProduct />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="*" element={<Error />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App

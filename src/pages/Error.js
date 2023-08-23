import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { Button } from '../styles/Button'
import { useProduct } from '../context/productContext'

function Error() {
  const { products, featuredProducts } = useProduct()
  console.log(products)
  console.log(featuredProducts)
  return (
    <Wrapper>
      <div className="container">
        <div>
          <h2>404</h2>
          <h3>OH! You're lost</h3>
          <p>
            The page you are looking for does not exist. You can click the below
            button to go to Home page.
          </p>
          <NavLink to="/">
            <Button>Go to Home</Button>
          </NavLink>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  .container {
    padding: 6rem 0;
    text-align: center;
  }

  h2 {
    font-size: 8rem;
    margin: 10px;
  }

  h3 {
    font-size: 5rem;
    margin: 10px;
  }
  p {
    margin: 10px;
  }
`

export default Error

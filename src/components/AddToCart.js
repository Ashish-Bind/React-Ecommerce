import { useState } from 'react'
import styled from 'styled-components'
import { FaCheck } from 'react-icons/fa'
import CartAmountToggle from './CartAmountToggle'
import { NavLink } from 'react-router-dom'
import { Button } from '../styles/Button'
import { useCart } from '../context/cartContext'

function AddToCart({ product }) {
  const { id, colors, stock } = product
  const { addToCart } = useCart()
  const [primaryColor, setPrimaryColor] = useState(0)
  const [amount, setAmount] = useState(1)

  function increaseAmount() {
    amount < stock ? setAmount((prev) => prev + 1) : setAmount(stock)
  }
  function decreaseAmount() {
    amount > 1 ? setAmount((prev) => prev - 1) : setAmount(1)
  }

  return (
    <Wrapper>
      <div>
        <p>
          Color:{' '}
          {colors.map((color, i) => (
            <button
              key={i}
              style={{ backgroundColor: color }}
              className={
                colors[primaryColor] === color
                  ? 'btn-style active'
                  : 'btn-style'
              }
              onClick={() => setPrimaryColor(i)}
            >
              {colors[primaryColor] === color && <FaCheck className="icon" />}
            </button>
          ))}
          <CartAmountToggle
            increaseAmount={increaseAmount}
            decreaseAmount={decreaseAmount}
            amount={amount}
          />
          <NavLink
            to="/cart"
            onClick={() => {
              addToCart(id, colors[primaryColor], amount, product)
            }}
          >
            <Button>Add to Cart</Button>
          </NavLink>
        </p>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  .colors p {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  .btn-style {
    width: 2rem;
    height: 2rem;
    background-color: #000;
    border-radius: 50%;
    margin-left: 1rem;
    border: none;
    outline: none;
    opacity: 0.5;
    cursor: pointer;

    &:hover {
      opacity: 1;
    }
  }

  .active {
    opacity: 1;
  }

  .icon {
    font-size: 1rem;
    color: #fff;
  }

  /* we can use it as a global one too  */
  .amount-toggle {
    margin-top: 3rem;
    margin-bottom: 1rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: 1.4rem;

    button {
      border: none;
      background-color: #fff;
      cursor: pointer;
    }

    .amount-style {
      font-size: 2.4rem;
      color: ${({ theme }) => theme.colors.btn};
    }
  }
`

export default AddToCart

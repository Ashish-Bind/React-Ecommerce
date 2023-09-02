import styled from 'styled-components'
import { useCart } from '../context/cartContext'
import CartItems from '../components/CartItems'
import { Button } from '../styles/Button'
import { BsCart4 } from 'react-icons/bs'
import { NavLink } from 'react-router-dom'
import FormatPrice from '../helpers/FormatPrice'

const Cart = () => {
  const { cartItems, clearCart, totalPrice, shippingCharge } = useCart()

  return cartItems.length === 0 ? (
    <Wrapper>
      <div className="container empty-cart">
        <BsCart4 className="icon" />
        <h1>Cart is Empty</h1>
        <NavLink to="/products">
          <Button>Continue Shopping</Button>
        </NavLink>
      </div>
    </Wrapper>
  ) : (
    <Wrapper>
      <div className="container">
        <div className="cart-heading grid grid-five-column">
          <p>Item</p>
          <p className="cart-hide">Price</p>
          <p>Quantity</p>
          <p className="cart-hide">SubTotal</p>
          <p>Remove</p>
        </div>
        <hr />

        <div className="cart-item">
          {cartItems.map((item) => {
            return <CartItems key={item.id} item={item} />
          })}
        </div>

        <hr />

        <div className="cart-two-button">
          <Button>Continue Shopping</Button>
          <Button className="btn-clear" onClick={clearCart}>
            Clear Cart
          </Button>
        </div>

        <div className="order-total--amount">
          <div className="order-total--subdata">
            <div>
              <p>Subtotal:</p>
              <p>
                <FormatPrice price={totalPrice} />
              </p>
            </div>
            <div>
              <p>Shipping Charges:</p>
              <p>
                <FormatPrice price={shippingCharge} />
              </p>
            </div>
            <hr />
            <div>
              <p>Order Total:</p>
              <p>
                <FormatPrice price={totalPrice + shippingCharge} />
              </p>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  padding: 9rem 0;

  .empty-cart {
    text-align: center;
    h1 {
      font-weight: 600;
      margin: 2rem 0;
    }
    .icon {
      font-size: 20rem;
    }
  }

  .grid-four-column {
    grid-template-columns: repeat(4, 1fr);
  }

  .grid-five-column {
    grid-template-columns: repeat(4, 1fr) 0.3fr;
    text-align: center;
    align-items: center;
  }
  .cart-heading {
    text-align: center;
    .cart-heading > p {
      font-weight: bold;
    }
  }
  hr {
    margin-top: 1rem;
  }
  .cart-item {
    padding: 3.2rem 0;
    display: flex;
    flex-direction: column;
    gap: 3.2rem;
  }

  .cart-user--profile {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 1.2rem;
    margin-bottom: 5.4rem;

    img {
      width: 8rem;
      height: 8rem;
      border-radius: 50%;
    }
    h2 {
      font-size: 2.4rem;
    }
  }
  .cart-user--name {
    text-transform: capitalize;
  }
  .cart-image--name {
    /* background-color: red; */
    align-items: center;
    display: grid;
    gap: 1rem;
    grid-template-columns: 0.4fr 1fr;
    text-transform: capitalize;
    text-align: left;
    img {
      max-width: 5rem;
      height: 5rem;
      object-fit: contain;
      color: transparent;
    }

    .color-div {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      gap: 1rem;

      .color-style {
        width: 1.4rem;
        height: 1.4rem;

        border-radius: 50%;
      }
    }
  }

  .cart-two-button {
    margin-top: 2rem;
    display: flex;
    justify-content: space-between;

    .btn-clear {
      background-color: #e74c3c;
    }
  }

  .amount-toggle {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2.4rem;
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

  .remove-icon {
    font-size: 1.6rem;
    color: #e74c3c;
    cursor: pointer;
  }

  .order-total--amount {
    width: 100%;
    margin: 4.8rem 0;
    text-transform: capitalize;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-end;

    .order-total--subdata {
      border: 0.1rem solid #f0f0f0;
      display: flex;
      flex-direction: column;
      gap: 1.8rem;
      padding: 3.2rem;
    }
    div {
      display: flex;
      gap: 3.2rem;
      justify-content: space-between;
    }

    div:last-child {
      background-color: #fafafa;
    }

    div p:last-child {
      font-weight: bold;
      color: ${({ theme }) => theme.colors.heading};
    }
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid-five-column {
      grid-template-columns: 1.5fr 1fr 0.5fr;
    }
    .cart-hide {
      display: none;
    }

    .cart-two-button {
      margin-top: 2rem;
      display: flex;
      justify-content: space-between;
      gap: 2.2rem;
    }

    .order-total--amount {
      width: 100%;
      text-transform: capitalize;
      justify-content: flex-start;
      align-items: flex-start;

      .order-total--subdata {
        width: 100%;
        border: 0.1rem solid #f0f0f0;
        display: flex;
        flex-direction: column;
        gap: 1.8rem;
        padding: 3.2rem;
      }
    }
  }
`

export default Cart

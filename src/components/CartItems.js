import { FaTrash } from 'react-icons/fa'
import FormatPrice from '../helpers/FormatPrice'
import CartAmountToggle from './CartAmountToggle'
import { useCart } from '../context/cartContext'

function CartItems({ item }) {
  const { id, color, amount, name, img, price, max } = item
  const { removeItem } = useCart()

  function increaseAmount() {
    //amount < stock ? setAmount((prev) => prev + 1) : setAmount(stock)
  }
  function decreaseAmount() {
    //amount > 1 ? setAmount((prev) => prev - 1) : setAmount(1)
  }

  return (
    <div className="cart-heading grid grid-five-column">
      <div className="cart-image--name">
        <div>
          <figure>
            <img src={img} alt={name} />
          </figure>
        </div>
        <div>
          <p>{name}</p>
          <div className="color-div">
            <p>Color:</p>
            <div
              className="color-style"
              style={{ backgroundColor: color }}
            ></div>
          </div>
        </div>
      </div>

      <div className="cart-hide">
        <p>
          <FormatPrice price={price * 10} />
        </p>
      </div>

      <div>
        <CartAmountToggle
          increaseAmount={increaseAmount}
          decreaseAmount={decreaseAmount}
          amount={amount}
        />
      </div>

      <div className="cart-hide">
        <p>
          <FormatPrice price={price * amount * 10} />
        </p>
      </div>

      <div>
        <FaTrash className="remove-icon" onClick={() => removeItem(id)} />
      </div>
    </div>
  )
}

export default CartItems
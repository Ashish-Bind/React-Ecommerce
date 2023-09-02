import { FaTrash } from 'react-icons/fa'
import FormatPrice from '../helpers/FormatPrice'
import CartAmountToggle from './CartAmountToggle'
import { useCart } from '../context/cartContext'

function CartItems({ item }) {
  const { id, color, amount, name, img, price } = item
  const { removeItem, increaseAmount, decreaseAmount } = useCart()

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
          <FormatPrice price={price} />
        </p>
      </div>

      <div>
        <CartAmountToggle
          increaseAmount={() => increaseAmount(id)}
          decreaseAmount={() => decreaseAmount(id)}
          amount={amount}
        />
      </div>

      <div className="cart-hide">
        <p>
          <FormatPrice price={price * amount} />
        </p>
      </div>

      <div>
        <FaTrash className="remove-icon" onClick={() => removeItem(id)} />
      </div>
    </div>
  )
}

export default CartItems

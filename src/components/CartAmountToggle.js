import { FaPlus, FaMinus } from 'react-icons/fa'

function CartAmountToggle({ amount, increaseAmount, decreaseAmount }) {
  return (
    <div className="cart-button">
      <div className="amount-toggle">
        <button onClick={decreaseAmount}>
          <FaMinus />
        </button>
        <span>{amount}</span>
        <button onClick={increaseAmount}>
          <FaPlus />
        </button>
      </div>
    </div>
  )
}

export default CartAmountToggle

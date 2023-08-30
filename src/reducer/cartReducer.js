export const CART_ACTIONS = {
  ADD_ITEM_CART: 'add-item-cart',
  REMOVE_ITEM: 'remove-item',
}

function addCartItem(productData) {
  const { id, color, amount, product } = productData
  return {
    id: id + color,
    color,
    amount,
    name: product.name,
    img: product.image[0].url,
    price: product.price,
    max: product.stock,
  }
}

function removeCartItem(state, id) {
  return state.filter((item) => item.id !== id)
}

const reducer = (state, { type, payload }) => {
  switch (type) {
    case CART_ACTIONS.ADD_ITEM_CART: {
      return { ...state, cartItems: [...state.cartItems, addCartItem(payload)] }
    }

    case CART_ACTIONS.REMOVE_ITEM: {
      return { ...state, cartItems: removeCartItem(state.cartItems, payload) }
    }

    default: {
      return state
    }
  }
}

export default reducer

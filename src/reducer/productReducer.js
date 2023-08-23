export const PRODUCTS_ACTIONS = {
  SET_ERROR: 'set-error',
  SET_LOADING: 'set-loading',
  SET_PRODUCTS: 'set-product',
  SET_SINGLE_PRODUCT: 'set-single-product',
}

const getFeaturedProducts = (data) => {
  return data.filter((item) => item.featured === true)
}

const productReducer = (state, { type, payload }) => {
  switch (type) {
    case PRODUCTS_ACTIONS.SET_ERROR:
      return { ...state, isLoading: false, isError: true }

    case PRODUCTS_ACTIONS.SET_LOADING:
      return { ...state, isLoading: true }

    case PRODUCTS_ACTIONS.SET_PRODUCTS:
      return {
        ...state,
        products: payload,
        isLoading: false,
        featuredProducts: getFeaturedProducts(payload),
      }

    case PRODUCTS_ACTIONS.SET_SINGLE_PRODUCT:
      return {
        ...state,
        isLoading: false,
        singleProduct: payload,
      }

    default:
      return state
  }
}

export default productReducer

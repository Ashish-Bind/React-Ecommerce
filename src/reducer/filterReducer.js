export const FILTER_ACTIONS = {
  LOAD_FILTER_ITEMS: 'load-filter-items',
  SET_GRID: 'set-grid',
  SET_LIST: 'set-list',
  GET_SORT_VALUE: 'get-sort-value',
  SORTING_PRODUCTS: 'sorting-products',
  SET_FILTER_VALUE: 'set-filter-value',
  FILTER_PRODUCTS: 'filter-products',
  CLEAR_FILTERS: 'clear-filters',
}

const getSortedItems = (state) => {
  const { filteredItems, sortByValue } = state
  const tempSortedProducts = [...filteredItems]

  switch (sortByValue) {
    case 'lowest':
      return tempSortedProducts.sort((a, b) => a.price - b.price)

    case 'highest':
      return tempSortedProducts.sort((a, b) => b.price - a.price)

    case 'a-z':
      return tempSortedProducts.sort((a, b) => a.name.localeCompare(b.name))

    case 'z-a':
      return tempSortedProducts.sort((a, b) => b.name.localeCompare(a.name))

    default:
      return filteredItems
  }
}

export const reducer = (state, { type, payload }) => {
  switch (type) {
    case FILTER_ACTIONS.LOAD_FILTER_ITEMS: {
      const priceArray = payload.map((item) => item.price)
      const maxValue = Math.max(...priceArray)
      return {
        ...state,
        filteredItems: [...payload],
        allProducts: [...payload],
        max: maxValue,
        filters: {
          ...state.filters,
          priceRangeText: maxValue,
        },
      }
    }

    case FILTER_ACTIONS.SET_GRID:
      return { ...state, gridView: true }

    case FILTER_ACTIONS.SET_LIST:
      return { ...state, gridView: false }

    case FILTER_ACTIONS.GET_SORT_VALUE:
      return { ...state, sortByValue: payload }

    case FILTER_ACTIONS.SORTING_PRODUCTS: {
      return {
        ...state,
        filteredItems: getSortedItems(state, state.sortByValue),
      }
    }

    case FILTER_ACTIONS.SET_FILTER_VALUE: {
      return {
        ...state,
        filters: {
          ...state.filters,
          [payload.name]: payload.value,
        },
      }
    }

    case FILTER_ACTIONS.FILTER_PRODUCTS: {
      const { allProducts } = state
      let tempFilteredProducts = [...allProducts]
      const {
        searchText,
        categoryText,
        companyText,
        colorText,
        priceRangeText,
      } = state.filters

      if (searchText) {
        tempFilteredProducts = tempFilteredProducts.filter((product) => {
          return product.name.toLowerCase().includes(searchText.toLowerCase())
        })
      }

      if (categoryText !== 'all') {
        tempFilteredProducts = tempFilteredProducts.filter((product) => {
          return product.category === categoryText
        })
      }

      if (companyText !== 'all') {
        tempFilteredProducts = tempFilteredProducts.filter((product) => {
          return product.company === companyText
        })
      }

      if (colorText !== 'all') {
        tempFilteredProducts = tempFilteredProducts.filter((product) => {
          return product.colors.includes(colorText)
        })
      }

      if (priceRangeText) {
        tempFilteredProducts = tempFilteredProducts.filter((product) => {
          return product.price <= priceRangeText
        })
      }

      return { ...state, filteredItems: tempFilteredProducts }
    }

    case FILTER_ACTIONS.CLEAR_FILTERS: {
      return {
        ...state,
        max: state.max,
        filters: {
          ...state.filters,
          searchText: '',
          categoryText: 'all',
          companyText: 'all',
          colorText: 'all',
          priceRangeText: state.max,
        },
      }
    }

    default:
      return state
  }
}

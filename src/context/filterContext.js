import { createContext, useContext, useEffect, useReducer } from 'react'
import {
  reducer as filterReducer,
  FILTER_ACTIONS,
} from '../reducer/filterReducer'
import { useProduct } from './productContext'
const initialState = {
  filteredItems: [],
  allProducts: [],
  gridView: true,
  sortByValue: 'lowest',
  max: 0,
  filters: {
    searchText: '',
    categoryText: 'all',
    companyText: 'all',
    colorText: 'all',
    priceRangeText: 0,
  },
}

const FilterContext = createContext()

export default function FilterProvider({ children }) {
  const { products } = useProduct()
  const [state, dispatch] = useReducer(filterReducer, initialState)

  const setGrid = () => {
    dispatch({ type: FILTER_ACTIONS.SET_GRID })
  }

  const setList = () => {
    dispatch({ type: FILTER_ACTIONS.SET_LIST })
  }

  const sorting = (e) => {
    dispatch({ type: FILTER_ACTIONS.GET_SORT_VALUE, payload: e.target.value })
  }

  const updateFilterValue = (e) => {
    const name = e.target.name
    const value = e.target.value
    dispatch({
      type: FILTER_ACTIONS.SET_FILTER_VALUE,
      payload: { name, value },
    })
  }

  const clearFilter = () => {
    dispatch({ type: FILTER_ACTIONS.CLEAR_FILTERS })
  }

  useEffect(() => {
    dispatch({ type: FILTER_ACTIONS.FILTER_PRODUCTS })
  }, [state.filters])

  useEffect(() => {
    //dispatch({ type: FILTER_ACTIONS.FILTER_PRODUCTS })
    dispatch({ type: FILTER_ACTIONS.SORTING_PRODUCTS })
  }, [state.sortByValue])

  useEffect(() => {
    dispatch({ type: FILTER_ACTIONS.LOAD_FILTER_ITEMS, payload: products })
  }, [products])

  return (
    <FilterContext.Provider
      value={{
        ...state,
        setGrid,
        setList,
        sorting,
        updateFilterValue,
        clearFilter,
      }}
    >
      {children}
    </FilterContext.Provider>
  )
}

export const useFilter = () => useContext(FilterContext)

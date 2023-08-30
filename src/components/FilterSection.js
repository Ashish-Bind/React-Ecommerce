import styled from 'styled-components'
import { FaCheck } from 'react-icons/fa'
import { useFilter } from '../context/filterContext'
import FormatPrice from '../helpers/FormatPrice'
import { Button } from '../styles/Button'

function FilterSection() {
  const {
    filters: { searchText, categoryText, colorText, priceRangeText },
    updateFilterValue,
    allProducts,
    max,
    clearFilter,
  } = useFilter()

  const getUniqueData = (data, property) => {
    let uniqueData = data.map((product) => product[property])
    if (property === 'colors') {
      uniqueData = uniqueData.flat()
    }
    return ['all', ...new Set(uniqueData)]
  }

  const uniqueCategory = getUniqueData(allProducts, 'category')
  const uniqueCompany = getUniqueData(allProducts, 'company')
  const uniqueColors = getUniqueData(allProducts, 'colors')
  console.log(uniqueColors)

  return (
    <Wrapper>
      <div className="filter-search">
        <form onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            name="searchText"
            value={searchText}
            onChange={updateFilterValue}
            placeholder="Search Product..."
            autoComplete="off"
          />
        </form>
      </div>

      <div className="filter-category">
        <h3>Category</h3>
        <div>
          {uniqueCategory.map((category, i) => (
            <button
              key={i}
              type="button"
              name="categoryText"
              value={category}
              onClick={updateFilterValue}
              className={categoryText === category ? ' active' : ''}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <div className="filter-company">
        <h3>Company</h3>
        <select
          name="companyText"
          className="filter-company--select"
          onChange={updateFilterValue}
        >
          {uniqueCompany.map((company, i) => (
            <option key={i} value={company}>
              {company}
            </option>
          ))}
        </select>
      </div>

      <div className="filter-colors colors">
        <h3>Colors</h3>

        <div className="filter-color-style">
          {uniqueColors.map((color, i) => {
            return color !== 'all' ? (
              <button
                key={i}
                type="button"
                name="colorText"
                className={`btn-style ${color === colorText && 'active'} `}
                style={{ backgroundColor: color }}
                value={color}
                onClick={updateFilterValue}
              >
                {color === colorText && <FaCheck className="icon" />}
              </button>
            ) : (
              <button
                key={i}
                type="button"
                name="colorText"
                className="all-btn-color"
                value={color}
                onClick={updateFilterValue}
              >
                All
              </button>
            )
          })}
        </div>
      </div>

      <div className="filter-price">
        <h3>Price</h3>
        <p>
          <FormatPrice price={priceRangeText} />
        </p>
        <input
          type="range"
          name="priceRangeText"
          value={priceRangeText}
          onChange={updateFilterValue}
          min={0}
          max={max}
        />
      </div>

      <div className="filter-clear">
        <Button onClick={clearFilter}>Clear Filters</Button>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  padding: 5rem 0;
  display: flex;
  flex-direction: column;
  gap: 3rem;

  h3 {
    padding: 2rem 0;
    font-size: bold;
  }

  .filter-search {
    input {
      padding: 1rem 2rem;
      width: 100%;
      font-size: 1.5rem;
      text-transform: none;
    }
  }

  .filter-category {
    h3 {
      font-weight: 600;
    }

    div {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 1.4rem;

      button {
        border: none;
        background-color: ${({ theme }) => theme.colors.white};
        text-transform: capitalize;
        cursor: pointer;

        &:hover {
          color: ${({ theme }) => theme.colors.btn};
        }
      }

      .active {
        border-bottom: 1px solid #000;
        color: ${({ theme }) => theme.colors.btn};
      }
    }
  }

  .filter-company {
    h3 {
      font-weight: 600;
    }
  }

  .filter-company--select {
    padding: 0.6rem 2rem;
    font-size: 1.6rem;
    color: ${({ theme }) => theme.colors.text};
    text-transform: capitalize;
  }

  .filter-color-style {
    display: flex;
    justify-content: center;
  }

  .color-all--style {
    background-color: transparent;
    text-transform: capitalize;
    border: none;
    cursor: pointer;
  }

  .filter-colors {
    h3 {
      font-weight: 600;
    }
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

  .checkStyle {
    font-size: 1rem;
    color: #fff;
  }

  .all-btn-color {
    border: none;
    font-weight: 600;
  }

  .filter-price {
    input {
      margin: 0.5rem 0 1rem 0;
      padding: 0;
      box-shadow: none;
      cursor: pointer;
    }
  }

  .filter-shipping {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .filter-clear .btn {
    background-color: #ec7063;
    color: #000;
  }
`

export default FilterSection

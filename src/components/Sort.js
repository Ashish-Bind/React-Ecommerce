import styled from 'styled-components'
import { BsFillGridFill, BsList } from 'react-icons/bs'
import { useFilter } from '../context/filterContext'

function Sort() {
  const { gridView, setGrid, setList, filteredItems, sorting } = useFilter()

  return (
    <Wrapper className="sort-section">
      <div className="sorting-list--grid">
        <button
          className={gridView === true ? 'sort-btn active' : 'sort-btn'}
          onClick={() => setGrid()}
        >
          <BsFillGridFill className="icon" />
        </button>
        <button
          className={gridView !== true ? 'sort-btn active' : 'sort-btn'}
          onClick={() => setList()}
        >
          <BsList className="icon" />
        </button>
      </div>
      <div className="product-data">
        <span className="items-length">{filteredItems.length}</span> items found
      </div>
      <div className="sort-selection">
        <select onClick={sorting}>
          <option value="lowest">Sort by Lowest</option>
          <option value="highest">Sort by Highest</option>
          <option value="a-z">Sort(a-z)</option>
          <option value="z-a">Sort(z-a)</option>
        </select>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  display: flex;
  justify-content: space-between;
  margin-top: 5rem;

  .sorting-list--grid {
    display: flex;
    gap: 2rem;

    .sort-btn {
      padding: 1rem 1rem;
      border: none;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
    }

    .icon {
      font-size: 1.6rem;
    }
    .active {
      background-color: ${({ theme }) => theme.colors.black};
      color: #fff;
    }
  }

  .items-length {
    font-weight: bold;
  }

  .product-data {
    display: flex;
    align-items: center;
    font-size: 1.7rem;
    gap: 5px;
  }

  .sort-selection .sort-selection--style {
    padding: 0.5rem;
    cursor: pointer;

    .sort-select--option {
      padding: 0.5rem 0;
      cursor: pointer;
      height: 2rem;
      padding: 10px;
    }
  }

  .sort-selection select {
    padding: 1rem 2rem;
    font-size: 1.5rem;
  }
`

export default Sort

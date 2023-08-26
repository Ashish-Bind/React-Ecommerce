import React from 'react'
import styled from 'styled-components'
import Product from '../pages/Product'
import FormatPrice from '../helpers/FormatPrice'
import { NavLink } from 'react-router-dom'
import { Button } from '../styles/Button'

function ListView({ items }) {
  return (
    <Wrapper className="section">
      <div className="container-grid">
        {items.map(({ id, name, image, price, description }) => (
          <div className="card grid grid-two-column" key={id}>
            <figure>
              <img src={image} alt={name} />
            </figure>

            <div className="card-data">
              <h3>{name}</h3>
              <p className="price-data">
                <FormatPrice price={price} />
              </p>
              <p>{description.slice(0, 100)}...</p>
              <NavLink to={`/singleproduct/${id}`} className="btn-main">
                <Button className="btn">Read More</Button>
              </NavLink>
            </div>
          </div>
        ))}
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  padding: 9rem 0;

  .container {
    max-width: 120rem;
  }

  .grid {
    gap: 3.2rem;
  }

  .price-data {
    font-weight: 600;
    font-size: 2rem;
    color: rgb(98 84 243);
  }

  figure {
    width: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
    transition: all 0.5s linear;
    &:hover img {
      transform: scale(1.2);
    }
    img {
      max-width: 100%;
      height: 20rem;
      transition: all 0.2s linear;
      object-fit: cover;
    }
  }

  .card {
    border: 1px solid rgb(170 170 170 / 60%);
    margin: 5px 0;

    .card-data {
      padding: 0 2rem;
    }

    h3 {
      margin: 2rem 0;
      font-weight: 300;
      font-size: 2.4rem;
      text-transform: capitalize;
    }

    .btn {
      margin: 2rem 0;
      background-color: rgb(0 0 0 / 0%);
      border: 0.1rem solid rgb(98 84 243);
      display: flex;
      justify-content: center;
      align-items: center;
      color: rgb(98 84 243);

      &:hover {
        background-color: rgb(98 84 243);
      }

      &:hover a {
        color: #fff;
      }
      a {
        color: rgb(98 84 243);
        font-size: 1.4rem;
      }
    }

    .btn-main .btn:hover {
      color: #fff;
    }
  }
`

export default ListView

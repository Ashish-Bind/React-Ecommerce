import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

function ProductImage({ images = [{ url: '' }] }) {
  const [mainIndex, setMainIndex] = useState(0)

  return (
    <Wrapper>
      <div className="grid grid-four-column">
        {images.map((item, i) => {
          return (
            <figure key={i}>
              <img
                src={item.url}
                alt={item.filename}
                className="box-image--style"
                onClick={() => setMainIndex(i)}
              />
            </figure>
          )
        })}
      </div>

      <div className="main-screen">
        <img src={images[mainIndex].url} alt={images[mainIndex].filename} />
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: 0.4fr 1fr;
  gap: 1rem;

  .grid {
    flex-direction: row;
    justify-items: center;
    align-items: center;
    width: 100%;
    gap: 1rem;
    /* order: 2; */

    img {
      max-width: 100%;
      max-height: 100%;
      background-size: cover;
      object-fit: contain;
      border-radius: 5px;
      cursor: pointer;
      box-shadow: ${({ theme }) => theme.colors.shadow};
    }
  }

  .main-screen {
    display: grid;
    place-items: center;
    order: 1;
    img {
      max-width: 100%;
      height: auto;
      border-radius: 8px;
      box-shadow: ${({ theme }) => theme.colors.shadow};
    }
  }
  .grid-four-column {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(4, 1fr);
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    display: flex;
    flex-direction: column;
    order: 1;

    .grid-four-column {
      grid-template-rows: 1fr;
      grid-template-columns: repeat(4, 1fr);
    }
  }
`

export default ProductImage

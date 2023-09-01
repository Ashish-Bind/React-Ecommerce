import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import { useProduct } from '../context/productContext'
import { useEffect } from 'react'
import PageNavigation from '../components/PageNavigation'
import { Container } from '../styles/Container'
import ProductImage from '../components/ProductImage'
import FormatPrice from '../helpers/FormatPrice'
import { MdSecurity } from 'react-icons/md'
import { TbTruckDelivery, TbReplace } from 'react-icons/tb'
import Star from '../components/Star'
import AddToCart from '../components/AddToCart'

const SINGLE_PRODUCT_URL = `https://api.pujakaitem.com/api/products`

const SingleProduct = () => {
  const { getSingleProduct, singleProduct, isLoading } = useProduct()
  const { id } = useParams()

  useEffect(() => {
    getSingleProduct(`${SINGLE_PRODUCT_URL}/?id=${id}`)
  }, [])

  const {
    id: productId,
    company,
    description,
    name,
    price,
    category,
    stock,
    stars,
    reviews,
    image,
  } = singleProduct

  return (
    <Wrapper>
      <Container className="container">
        <PageNavigation title={name} isLoading={isLoading} />
        <div className="grid grid-two-column">
          <div className="product_images">
            <ProductImage images={image} />
          </div>

          <div className="product-data">
            <h2>{name}</h2>
            <p>
              <Star stars={stars} reviews={reviews} />
            </p>
            <p className="product-data-price">
              MRP:{' '}
              <del>
                <FormatPrice price={price + 400000} />
              </del>
            </p>
            <p className="product-data-price product-data-real-price">
              Deal of the Day: <FormatPrice price={price} />
            </p>
            <p>{description}</p>
            <div className="product-data-warranty">
              <div className="product-warranty-data">
                <TbTruckDelivery className="warranty-icon" />
                <p>Free Delivery</p>
              </div>

              <div className="product-warranty-data">
                <TbReplace className="warranty-icon" />
                <p>30 Days Replacement</p>
              </div>

              <div className="product-warranty-data">
                <MdSecurity className="warranty-icon" />
                <p>2 Year Warranty</p>
              </div>
            </div>
            <div className="product-data-info">
              <p>
                Availblity:{' '}
                <span>{stock > 0 ? 'In Stock' : 'Out of Stock'}</span>
              </p>
              <p>
                ID: <span>{productId}</span>
              </p>
              <p>
                Brand: <span>{company}</span>
              </p>
            </div>
            <hr />
            {stock > 0 ? <AddToCart product={singleProduct} /> : ''}
          </div>
        </div>
      </Container>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  .container {
    padding: 9rem 0;
  }

  .product-image {
    display: flex;
    align-items: center;
  }

  .product-data {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 2rem;

    .product-data-warranty {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid #ccc;
      margin-bottom: 1rem;

      .product-warranty-data {
        text-align: center;

        .warranty-icon {
          background-color: rgba(220, 220, 220, 0.5);
          border-radius: 50%;
          width: 4rem;
          height: 4rem;
          padding: 0.6rem;
        }
        p {
          font-size: 1.4rem;
          padding-top: 0.4rem;
        }
      }
    }

    .product-data-price {
      font-weight: bold;
    }
    .product-data-real-price {
      color: ${({ theme }) => theme.colors.btn};
    }
    .product-data-info {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      font-size: 1.8rem;

      span {
        font-weight: bold;
      }
    }

    hr {
      max-width: 100%;
      width: 90%;
      /* height: 0.2rem; */
      border: 0.1rem solid #000;
      color: red;
    }
  }

  .product-images {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    padding: 0 2.4rem;
  }
`

export default SingleProduct

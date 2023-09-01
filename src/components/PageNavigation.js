import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

function PageNavigation({ title, isLoading }) {
  return (
    <Wrapper>
      {isLoading ? (
        <div>Loading ...</div>
      ) : (
        <div>
          <NavLink to="/">Home</NavLink>/{title}
        </div>
      )}
    </Wrapper>
  )
}

const Wrapper = styled.section`
  height: 10rem;
  background-color: ${({ theme }) => theme.colors.bg};
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 3.2rem;

  a {
    font-size: 3.2rem;
  }
`

export default PageNavigation

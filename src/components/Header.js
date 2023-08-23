import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import Navbar from './Navbar'

function Header() {
  return (
    <MainHeader>
      <NavLink to="/">
        <img src="./images/logo.png" alt="" className="logo" />
      </NavLink>
      <Navbar />
    </MainHeader>
  )
}

const MainHeader = styled.header`
  padding: 0 4.8rem;
  height: 10rem;
  background-color: ${({ theme }) => theme.colors.bg};
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  .logo {
    height: 7rem;
  }
`

export default Header

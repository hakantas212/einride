import { Link } from "gatsby"
import React from "react"
import Logo from "../images/logo.svg"
import styled from "styled-components"

const Header = () => (
  <HeaderWrapper>
    <NavBar>
      <LogoWrapper>
        <Link>
          <img src={Logo} alt="Logo"></img>
        </Link>
      </LogoWrapper>
      <ul className="nav-items">
        <li>
          <StyledLink to="/news">News</StyledLink>
        </li>
        <li>
          <StyledLink to="/">Press</StyledLink>
        </li>
        <li>
          <StyledLink to="/">Career</StyledLink>
        </li>
        <li>
          <StyledLink to="/">Contact</StyledLink>
        </li>
      </ul>
    </NavBar>
  </HeaderWrapper>
)
const HeaderWrapper = styled.header`
  position: fixed;
  background-color: #fff;
  width: 100%;
  top: 0;
  height: 65px;
  z-index: 800;
  border-bottom: 1px solid #eaeaea;
`

const NavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  max-width: 1150px;
  margin: 0 auto;

  .nav-items {
    display: flex;
  }

  .nav-items li {
    list-style: none;
    display: flex;
    padding: 1.2rem 1.5rem;
    font-size: 16px;
    letter-spacing: 0;
  }
`
const LogoWrapper = styled.div`
  padding-top: 1.2rem;
`

const StyledLink = styled(Link)`
  color: #999;
  text-decoration: none;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
`

export default Header

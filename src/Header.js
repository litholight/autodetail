import React from 'react'
import { Link } from 'react-router-dom'

// import arrowsign from "./arrowsign.svg";
import styled from 'styled-components'

const Container = styled.div`
  color: lightblue;
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
  width: 100%;
`

const Brand = styled.div`
  padding: 1rem;
  display: flex;
  justify-content: center;
`

const Heading = styled.div`
  color: white;
  font-size: 2.75rem;
  @media (max-width: 480px) {
    font-size: 1.5rem;
    width: 200px;
  }
`

const HR = styled.hr`
  border: 3px solid darkgoldenrod;
  width: 80%;
  margin: 0px auto;
`

const UL = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  font-size: 1.5rem;
  color: grey;
  list-style-type: none;
  margin: 0.5rem;
`

const LI = styled.div`
  /* display: flex;
  align-items: center; */
  display: block;
`

const NavItem = styled(Link)`
  text-decoration: none;

  &:hover {
    color: darkgoldenrod;
    cursor: pointer;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
    width: 200px;
  }
`

const Header = () => {
  return (
    <Container>
      <Brand>
        <Heading>STEVE & TANNIR'S COMPLETE AUTO DETAILING</Heading>
      </Brand>

      <HR />
      {/* <img src={arrowsign} width="400px" alt="sign" /> */}

      <nav>
        <UL>
          <LI>
            <NavItem to='/autodetail'>HOME</NavItem>
          </LI>
          <LI>
            <NavItem to='/autodetail/about'>ABOUT US</NavItem>
          </LI>
          <LI>
            <NavItem to='/autodetail/services'>SERVICES</NavItem>
          </LI>
        </UL>
      </nav>
      <HR />
    </Container>
  )
}

export default Header

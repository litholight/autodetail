import React from 'react'
import arrowsign from './arrowsign.svg'
import logo from './stevelogo.JPG'
import styled from 'styled-components'

const Container = styled.div`
  color: lightblue;
  font-size: 2rem;
  font-weight: bold;
  padding: 1rem;
  text-align: center;
  width: 100%;
  border-bottom: 4px solid lightblue;
`

const UL = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  font-size: 1.5rem;
  color: grey;
  list-style-type: none;
  margin: 0.5rem;
  &:hover {
    color: lightblue;
  }
`

const LI = styled.div`
  color: grey;
  &:hover {
    color: lightblue;
    cursor: pointer;
  }
`

const Header = () => {
  return (
    <Container>
      <div>Steve & Tannir's</div>
      <img src={arrowsign} width='400px' alt='sign' />

      <nav>
        <UL>
          <LI>
            <a href='/'>HOME</a>
          </LI>
          <LI>
            <a href='/about'>ABOUT US</a>
          </LI>
          <LI>
            <a href='/services'>SERVICES</a>
          </LI>
        </UL>
      </nav>
    </Container>
  )
}

export default Header

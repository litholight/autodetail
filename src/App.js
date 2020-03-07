import React from 'react'
import './App.css'
import styled from 'styled-components'

import logo from './stevelogo.JPG'

const Header = styled.div`
  color: lightblue;
  background-color: white;
  font-size: 2rem;
  font-weight: bold;
  padding: 2rem;
  text-align: center;
`

function App() {
  return (
    <div>
      <Header>
        <div>Steve & Tannir's</div>

        <img src={logo} width='400px' alt='Logo' />
      </Header>
    </div>
  )
}

export default App

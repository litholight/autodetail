import React from 'react'
import './App.css'
import styled from 'styled-components'

import logo from './stevelogo.JPG'

const Header = styled.div`
  color: lightblue;
  background-color: white;
  font-size: 2rem;
  font-weight: bold;
  padding: 1rem;
  text-align: center;
`

const Item = styled.li`
  color: lightblue;
  font-size: 1rem;
  text-align: center;
`

function App() {
  return (
    <div>
      <Header>
        <div>Steve & Tannir's</div>
        <img src={logo} width='400px' alt='Logo' />
        <div>Stop by, text or call!</div>
        <div>Tannir 740-343-5865</div>
        <div>Steve 740-221-5690</div>
      </Header>
      <div>Available 9-4 Monday thru Thursday</div>
      <hr />
      <Header>Services Offered</Header>
      <Header>Full Service Wash</Header>
      <ul>
        <Item>Wash</Item>
        <Item>Tires</Item>
        <Item>Shine</Item>
        <Item>15 minutes</Item>
      </ul>
      <Header>Complete Detail</Header>
      <ul>
        <Item>Includes full service wash</Item>
        <Item>Two coats of wax</Item>
        <Item>Carpet shampoo</Item>
        <Item>$100 cars, $120 trucks and vans</Item>
      </ul>
      <Header>Interior Detail</Header>
      <ul>
        <Item>$45</Item>
      </ul>
      <Header>Exterior Detail</Header>
      <ul>
        <Item>$65</Item>
      </ul>
      We use Malco - The Choice of Profressionals
    </div>
  )
}

export default App

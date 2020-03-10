import React from 'react'
import Header from './Header'
import './App.css'
import styled from 'styled-components'

import truck from './truck.jpg'

const Section = styled.div`
  color: lightblue;
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

const Info = styled.div`
  color: white;
  font-size: 1rem;
  text-align: center;
`

const Image = styled.li`
  display: flex;
  justify-content: center;
  padding-top: 20px;
  margin-bottom: 1rem;
`

function App() {
  return (
    <div>
      <Header />
      <Image>
        <img src={truck} width='800px' alt='sign' />
      </Image>
      {/* <Section>Services Offered</Section>
      <Section>Full Service Wash</Section>
      <ul>
        <Item>Wash</Item>
        <Item>Tires</Item>
        <Item>Shine</Item>
        <Item>15 minutes</Item>
      </ul>
      <Section>Complete Detail</Section>
      <ul>
        <Item>Includes full service wash</Item>
        <Item>Two coats of wax</Item>
        <Item>Carpet shampoo</Item>
        <Item>$100 cars, $120 trucks and vans</Item>
      </ul>
      <Section>Interior Detail</Section>
      <ul>
        <Item>$45</Item>
      </ul>
      <Section>Exterior Detail</Section>
      <ul>
        <Item>$65</Item>
      </ul> */}
      <Info>Stop by, text or call!</Info>
      <Info>Tannir 740-343-5865</Info>
      <Info>Steve 740-221-5690</Info>
      <Info>Available 9-4 Monday thru Thursday</Info>
      <Info>We use Malco - The Choice of Profressionals</Info>
    </div>
  )
}

export default App

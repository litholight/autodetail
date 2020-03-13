import React from 'react'
import styled from 'styled-components'

const Section = styled.div`
  color: lightblue;
  font-size: 2rem;
  font-weight: bold;
  padding: 1rem;
  text-align: center;
`

const Item = styled.div`
  color: lightblue;
  font-size: 1rem;
  text-align: center;
`

function Services(props) {
  return (
    <div>
      <Section>Full Service Wash</Section>
      <Item>Wash</Item>
      <Item>Tires</Item>
      <Item>Shine</Item>
      <Item>15 minutes</Item>
      <Section>Complete Detail</Section>
      <Item>Includes full service wash</Item>
      <Item>Two coats of wax</Item>
      <Item>Carpet shampoo</Item>
      <Item>$100 cars, $120 trucks and vans</Item>
      <Section>Interior Detail</Section>
      <Item>$45</Item>
      <Section>Exterior Detail</Section>
      <Item>$65</Item>
      <Section>We use Malco - The Choice of Professionals</Section>
    </div>
  )
}

export default Services

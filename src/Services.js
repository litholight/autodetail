import React from "react";
import styled from "styled-components";

const Section = styled.div`
  color: lightblue;
  font-size: 2rem;
  font-weight: bold;
  padding: 1rem;
  text-align: center;
`;

const List = styled.ul`
  list-style: none;
`;

const Item = styled.li`
  color: lightblue;
  font-size: 1rem;
  text-align: center;
`;

function Services(props) {
  return (
    <div>
      <Section>Services Offered</Section>
      <Section>Full Service Wash</Section>
      <List>
        <Item>Wash</Item>
        <Item>Tires</Item>
        <Item>Shine</Item>
        <Item>15 minutes</Item>
      </List>
      <Section>Complete Detail</Section>
      <List>
        <Item>Includes full service wash</Item>
        <Item>Two coats of wax</Item>
        <Item>Carpet shampoo</Item>
        <Item>$100 cars, $120 trucks and vans</Item>
      </List>
      <Section>Interior Detail</Section>
      <List>
        <Item>$45</Item>
      </List>
      <Section>Exterior Detail</Section>
      <List>
        <Item>$65</Item>
      </List>
    </div>
  );
}

export default Services;

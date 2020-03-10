import React from "react";

import "./App.css";
import styled from "styled-components";

import truck from "./truck.jpg";

const Info = styled.div`
  color: white;
  font-size: 1rem;
  text-align: center;
`;

const ImageContainer = styled.li`
  display: flex;
  justify-content: center;
  padding-top: 30px;
  margin-bottom: 1rem;
`;

const Image = styled.img`
  width: 800px;
  @media (max-width: 480px) {
    width: 200px;
  }
`;

function App() {
  return (
    <div>
      <ImageContainer>
        <Image src={truck} alt="sign" />
      </ImageContainer>

      <Info>Stop by, text or call!</Info>
      <Info>Tannir 740-343-5865</Info>
      <Info>Steve 740-221-5690</Info>
      <Info>Available 9-4 Monday thru Thursday</Info>
      <Info>We use Malco - The Choice of Profressionals</Info>
    </div>
  );
}

export default App;

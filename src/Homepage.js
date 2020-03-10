import React from "react";

import "./App.css";
import styled from "styled-components";

import truck from "./truck.jpg";

const Info = styled.div`
  color: white;
  font-size: 1rem;
  text-align: center;
`;

const Image = styled.li`
  display: flex;
  justify-content: center;
  padding-top: 30px;
  margin-bottom: 1rem;
`;

function App() {
  return (
    <div>
      <Image>
        <img src={truck} width="800px" alt="sign" />
      </Image>

      <Info>Stop by, text or call!</Info>
      <Info>Tannir 740-343-5865</Info>
      <Info>Steve 740-221-5690</Info>
      <Info>Available 9-4 Monday thru Thursday</Info>
      <Info>We use Malco - The Choice of Profressionals</Info>
    </div>
  );
}

export default App;

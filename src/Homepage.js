import React from 'react'

import './App.css'
import styled from 'styled-components'

import truck from './atruck.jpg'

const Info = styled.div`
  color: white;
  font-size: 1rem;
  text-align: center;
`

const ImageContainer = styled.div`
  padding-top: 30px;
  margin-bottom: 2rem;
`

const Image = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  max-width: 60%;
  height: auto;
`

function App() {
  return (
    <div>
      <ImageContainer>
        <Image src={truck} alt='sign' />
      </ImageContainer>

      <Info>Stop by, text or call!</Info>
      <Info>Tannir 740-343-5865</Info>
      <Info>Steve 740-221-5690</Info>
      <br />
      <Info>9AM-4PM Monday thru Thursday</Info>
    </div>
  )
}

export default App

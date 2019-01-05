import React from 'react'
import styled from '@emotion/styled'

export default ({ illustrations }) => (
  <Container>
    {illustrations.map((Illustration, index) => (
      <Illustration key={index} />
    ))}
  </Container>
)

// Styles
const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 10px;
  justify-content: center;
`

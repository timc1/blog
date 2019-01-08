import React from 'react'
import styled from '@emotion/styled'

export default () => {
  return <ImageContainer aria-hidden="true">hi</ImageContainer>
}

const ImageContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  width: calc(100% - var(--skewedcontent) - 2%);
  background: #eee;
`

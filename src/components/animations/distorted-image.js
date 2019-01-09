import React, { useRef, useEffect } from 'react'
import styled from '@emotion/styled'
import { screenmd } from '../shared/styles'

import usePixiWarp from '../shared/hooks/usePixiWarp'

import timchang from '../../images/tim_chang.jpg'
import displacementImage from '../../images/displacement_image.jpg'

export default () => {
  const pixiContent = useRef()

  usePixiWarp({
    pixiRef: pixiContent,
    displacementImage,
    image: timchang,
  })

  return (
    <ImageContainer aria-hidden="true">
      <div
        css={{
          height: '100%',
          width: '100%',
          overflow: 'hidden',
        }}
        ref={pixiContent}
      />
    </ImageContainer>
  )
}

const ImageContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  max-width: 1500px;
  width: calc(100% - var(--skewedcontent) - 3%);
  z-index: -1;
  pointer-events: none;
  user-select: none;
  touch-action: none;

  @media (max-width: ${screenmd}px) {
    position: relative;
    height: 450px;
    width: 100%;
  }
`

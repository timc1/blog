import React, { useRef, useEffect } from 'react'
import styled from '@emotion/styled'
import { keyframes } from '@emotion/core'
import { screenmd } from '../shared/styles'
import { debounce } from '../../utils'

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

  const imageContainerRef = useRef()
  const debounceRef = useRef()
  const resizeRef = useRef(e =>
    debounce(
      debounceRef,
      () => {
        try {
          if (
            e.target.innerWidth <= 767 &&
            !imageContainerRef.current.classList.contains('blur-me')
          ) {
            imageContainerRef.current.classList.add('blur-me')
          } else if (
            e.target.innerWidth >= 768 &&
            imageContainerRef.current.classList.contains('blur-me')
          ) {
            imageContainerRef.current.classList.remove('blur-me')
          }
        } catch (err) {
          if (process.env.NODE_ENV !== 'production') {
            console.log('err', err)
          }
        }
      },
      500
    )
  )

  useEffect(() => {
    window.addEventListener('resize', resizeRef.current)

    return () => window.removeEventListener('resize', resizeRef.current)
  }, [])

  return (
    <ImageContainer ref={imageContainerRef} aria-hidden="true">
      <AnimatedRevealContainer ref={pixiContent} />
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

  @media (max-width: ${screenmd}px) {
    position: relative;
    height: 450px;
    width: 100%;
  }
`

const scaleIn = keyframes`
  to {
    transform: scaleX(0); 
  }
`

const AnimatedRevealContainer = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1;
    background: #fff;
    transform: scaleX(1);
    transform-origin: 100% 0;
    animation: ${scaleIn} 0.5s var(--cubic);
    animation-fill-mode: forwards;
    animation-delay: 0.4s;
  }
`

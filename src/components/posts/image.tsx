import React from 'react'
import styled from '@emotion/styled'

const Image = ({ src, alt }: { src: string; alt: string }) => (
  <Img src={src} alt={alt} />
)

Image.displayName = 'Image'
export default Image

const Img = styled.img`
  height: auto;
  width: 100%;
  border-radius: var(--baseborderradius);
`

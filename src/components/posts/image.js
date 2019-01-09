import React from 'react'
import styled from '@emotion/styled'

export default ({ src, alt }) => <Image src={src} alt={alt} />

const Image = styled.img`
  height: auto;
  width: 100%;
  border-radius: var(--baseborderradius);
`

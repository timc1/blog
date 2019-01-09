import React from 'react'

export default ({ src, alt }) => (
  <div
    css={{
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      height: '375px',
      width: '100%',
      marginTop: '-60px',
      background: `url(${src}) no-repeat top`,
      backgroundSize: 'cover',
      opacity: 0.4,
      zIndex: -1,
      pointerEvents: 'none',
      userSelect: 'none',
    }}
  />
)

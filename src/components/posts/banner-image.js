import React from 'react'

export default ({ src, alt }) => (
  <div
    css={{
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      height: '400px',
      width: '100%',
      background: `url(${src}) no-repeat top`,
      backgroundSize: 'cover',
      opacity: 0.5,
      zIndex: -1,
      pointerEvents: 'none',
      userSelect: 'none',
    }}
  />
)

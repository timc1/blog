import React, { useState, useEffect } from 'react'
import styled from '@emotion/styled'

export default () => {
  const [year, setYear] = useState(null)
  useEffect(() => {
    let d = new Date()
    let year = d.getFullYear()
    setYear(year)
  }, [])

  return <Footer>c. {year}</Footer>
}

const Footer = styled.footer`
  width: max-content;
  margin-right: 0;
`

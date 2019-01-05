import React, { useState, useEffect } from 'react'
import styled from '@emotion/styled'
import { UnstyledLink, Ul } from './styles'

export default props => {
  const [year, setYear] = useState(null)
  useEffect(() => {
    let d = new Date()
    let year = d.getFullYear()
    setYear(year)
  }, [])

  return (
    <Footer {...props}>
      <Items>
        <li>
          <UnstyledLink to="/">Email</UnstyledLink>
        </li>
        <li>
          <UnstyledLink newtab="true" to="/">
            Instagram
          </UnstyledLink>
        </li>
        <li>
          <UnstyledLink newtab="true" to="/">
            Product Hunt
          </UnstyledLink>
        </li>
        <li>
          <UnstyledLink newtab="true" to="/">
            LinkedIn
          </UnstyledLink>
        </li>
        <li>c. {year}</li>
      </Items>
    </Footer>
  )
}

const Footer = styled.footer`
  width: max-content;
  margin-right: ${props => (props.alignLeft ? 'auto' : '0')};
  margin-left: ${props => (props.alignLeft ? '0' : 'auto')};
  margin-top: 40px;
`

const Items = styled(Ul)`
  display: grid;
  grid-gap: 10px;

  li {
    list-style: none;
  }
  li:last-of-type {
    margin-top: 10px;
  }
`

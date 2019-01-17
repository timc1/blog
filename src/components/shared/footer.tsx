import React, { useState, useEffect } from 'react'
import styled from '@emotion/styled'
import { UnstyledLink, Ul } from './styles'

type FooterProps = {
  className?: string
  alignLeft?: boolean
}

const Footer = (props: FooterProps) => {
  const [year, setYear] = useState<number | null>(null)

  useEffect(() => {
    let d = new Date()
    let yr = d.getFullYear()
    setYear(yr)
  }, [])

  return (
    <FooterStyle {...props}>
      <Items>
        <li>
          <UnstyledLink to="/">Email</UnstyledLink>
        </li>
        <li>
          <UnstyledLink newtab="ne-resize" to="/">
            Instagram
          </UnstyledLink>
        </li>
        <li>
          <UnstyledLink newtab="ne-resize" to="/">
            Product Hunt
          </UnstyledLink>
        </li>
        <li>
          <UnstyledLink newtab="ne-resize" to="/">
            LinkedIn
          </UnstyledLink>
        </li>
        <li>c. {year}</li>
      </Items>
    </FooterStyle>
  )
}

Footer.displayName = 'Footer'
export default Footer

const FooterStyle = styled.footer`
  width: max-content;
  margin-top: 40px;
  margin-bottom: 20px;
  margin-right: ${(props: { alignLeft?: boolean }) =>
    props.alignLeft ? 'auto' : '0'};
  margin-left: ${props => (props.alignLeft ? '0' : 'auto')};
  padding-right: 20px;
`

const Items = styled(Ul)`
  display: grid;
  grid-gap: 10px;

  li {
    list-style: none;
    font-weight: var(--fontregular);
  }
  li:last-of-type {
    margin-top: 10px;
  }
`

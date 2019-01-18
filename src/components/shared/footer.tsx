import React, { useState, useEffect } from 'react'
import styled from '@emotion/styled'
import { UnstyledALink, Ul } from './styles'

type FooterProps = {
  className?: string
  alignLeft?: boolean
  isShowing?: boolean
}

const links = [
  { name: 'Email', link: 'mailto:timchang.tcc@gmail.com?subject=hi!' },
  { name: 'Instagram', link: 'https://instagram.com/timm.c' },
  { name: 'Product Hunt', link: 'https://www.producthunt.com/@timothy_chang' },
  { name: 'Linkedin', link: 'https://www.linkedin.com/in/timcchang/' },
]

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
        {links.map(link => (
          <li key={link.name}>
            <UnstyledALink
              href={link.link}
              tabIndex={props.isShowing ? 0 : -1}
              className="nice-link-dude"
            >
              {link.name}
            </UnstyledALink>
          </li>
        ))}
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

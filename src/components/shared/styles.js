import styled from '@emotion/styled'
import { css } from '@emotion/core'
import { Link } from 'gatsby'

const screensm = 568
const screenmd = 767
const screenlg = 1439

const maxWidth = css`
  max-width: 60%;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: ${screenmd}px) {
    max-width: 100%;
  }
`

const Ul = styled.ul``

const Li = styled.li`
  list-style: none;
`

const SectionBreak = styled.hr`
  max-width: 40px;
  margin: 80px 0 60px 0;
  border: none;
  height: 1px;
  background: var(--black);
`

const UnstyledLink = styled(Link)`
  display: block;
  color: var(--black);
  font-size: var(--fontsm);
  padding: 5px;
  margin: -5px;
  cursor: ${props => (props.newtab ? 'ne-resize' : 'pointer')};
  outline: none;

  &:hover,
  &:active,
  &:focus {
    opacity: 0.5;
  }
`

export {
  screensm,
  screenmd,
  screenlg,
  maxWidth,
  Ul,
  Li,
  SectionBreak,
  UnstyledLink,
}

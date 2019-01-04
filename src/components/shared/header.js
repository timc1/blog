import React from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/core'

import { Ul, Li, SectionBreak, UnstyledLink } from './styles'

import plusIcon from '../../images/plus.svg'

import useModal from './hooks/useModal'
import Modal from './modal'
import Footer from './footer'

export default () => (
  <Header>
    <Nav>
      <Ul>
        <Li>
          <MenuToggler />
        </Li>
      </Ul>
    </Nav>
  </Header>
)

const MenuToggler = () => {
  const { isShowing, toggle, getTogglerProps, getMenuProps } = useModal()

  return (
    <>
      <Modal
        {...getMenuProps({
          domNode: 'modal-root',
        })}
      >
        <ModalContentContainer>
          <MCAbout className={isShowing ? 'animate' : null}>
            <UnstyledLink
              to="/"
              onClick={e => toggle(prev => !prev)}
              css={{
                fontSize: `var(--fontmd)`,
                padding: `0.5625rem`,
                fontWeight: `var(--fontlight)`,
                fontFamily: `var(--titlefont)`,
              }}
            >
              Tim Chang
            </UnstyledLink>
          </MCAbout>
          <MCAbout className={isShowing ? 'animate' : null}>
            My work bridges storytelling and collaboration through design and
            code.
          </MCAbout>
          <MCAbout className={isShowing ? 'animate' : null}>
            From software tools for freelancers, marketplaces and commerce, to
            developing a compelling brand,
          </MCAbout>
          <MCAbout className={isShowing ? 'animate' : null}>
            I'm here to help.
          </MCAbout>
          <Break isAnimated={true} animate={isShowing ? true : false} />
          <MCAbout className={isShowing ? 'animate' : null}>
            Previously I've worked with verlocal, omnyfy, and handpick in San
            Francisco and Shanghai, with side ventures told here on this blog
            and Product Hunt.
          </MCAbout>
          <MCAbout className={isShowing ? 'animate' : null}>
            Currently, I am based in Los Angeles.
          </MCAbout>
          <Footer alignLeft />
        </ModalContentContainer>
      </Modal>
      <Toggler {...getTogglerProps()}>
        <h2>Menu</h2>
      </Toggler>
    </>
  )
}

// Styles
const Header = styled.header``

const Nav = styled.nav``

const Toggler = styled.button`
  position: fixed;
  right: calc(var(--basepadding) / 2);
  top: calc(var(--basepadding) / 2);
  padding: calc(var(--basepadding) / 2);
  background: none;
  border: none;
  transition: transform 0.15s var(--ease);
  outline: none;
  cursor: pointer;
  z-index: 3;

  h2 {
    position: relative;
    padding: var(--basepadding);
    margin: 0;
    font-size: 0;
    &::before,
    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      transition: 0.15s var(--ease);
      transition-property: opacity, transform, background;
    }
    &::before {
      border-radius: 50%;
      background: ${props => (props.isShowing ? 'var(--red)' : 'var(--black)')};
      box-shadow: var(--baseboxshadow);
    }
    &::after {
      background: var(--white);
      -webkit-mask: url(${plusIcon}) center bottom / contain no-repeat;
      margin: 9px;
      transform: ${props => (props.isShowing ? 'rotate(45deg)' : 'rotate(0)')};
    }
  }

  &:hover,
  &:focus {
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(1px);
  }
`

const ModalContentContainer = styled.div`
  max-width: var(--skewedcontent);
  margin-left: auto;
  padding: 30px 0;

  .animate {
    transform: translateX(0);
    opacity: 1;
  }

  ${props =>
    !props.isShowing &&
    css`
      .animate:first-of-type {
        transition-delay: 0.35s;
      }
      .animate:nth-of-type(2) {
        transition-delay: 0.45s;
      }
      .animate:nth-of-type(3) {
        transition-delay: 0.5s;
      }
      .animate:nth-of-type(4) {
        transition-delay: 0.6s;
      }
      .animate:nth-of-type(5) {
        transition-delay: 0.7s;
      }
      .animate:nth-of-type(6) {
        transition-delay: 0.8s;
      }
    `}
`

const MCAbout = styled.p`
  font-size: ${props => (props.noTransform ? 'inherit' : 'var(--fontxl)')};
  font-weight: var(--fontlight);
  font-family: var(--titlefont);
  opacity: 0;
  transform: ${props => (props.noTransform ? 'none' : 'translateX(25px)')};
  transition: 0.55s var(--ease);
  transition-properties: opacity, transform;
`

const Break = styled(SectionBreak)`
  transform: ${props => (props.animate ? 'scaleX(1)' : 'scaleX(0)')};
  transform-origin: 0;
  transition: transform 0.25s var(--ease);
  transition-delay: ${props => (props.animate ? '1.4s' : '0s')};
`

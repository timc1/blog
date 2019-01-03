import React from 'react'
import styled from '@emotion/styled'

import { Ul, Li } from './styles'

import plusIcon from '../../images/plus.svg'

import useModal from './hooks/useModal'
import Modal from './modal'

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
  const { getTogglerProps, getMenuProps } = useModal()

  return (
    <>
      <Modal
        {...getMenuProps({
          domNode: 'modal-root',
        })}
      >
        hiii
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
  right: 10px;
  top: 10px;
  padding: 10px;
  background: none;
  border: none;
  transition: transform 0.15s var(--ease);
  outline: none;
  cursor: pointer;
  z-index: 3;

  h2 {
    position: relative;
    padding: 20px;
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

import React, { useRef, useEffect } from 'react'
import ReactDOM from 'react-dom'
import styled from '@emotion/styled'

import { isMobile } from '../../utils'

const handleKeyDown = (e: KeyboardEvent, toggle: () => void) => {
  if (e.key.toUpperCase() === 'ESCAPE') {
    toggle()
  }
}

//const modifyDiv = (id, type, currentScrollPosition) => {
//  const el = document.getElementById(id)
//
//  switch (type) {
//    case 'freeze':
//      currentScrollPosition.current = window.scrollY
//      el.style = `
//        position: fixed;
//        top: ${currentScrollPosition.current * -1}px;
//        width: 100%;
//        overflow: hidden;
//      `
//      break
//    case 'unfreeze':
//      el.style = ``
//      window.scrollTo({
//        top: `${currentScrollPosition.current}`,
//      })
//      break
//    default:
//      break
//  }
//}

export default ({
  children,
  domNode,
  ...props
}: {
  children: React.ReactNode
  domNode: string
  toggle: () => void
  isShowing: boolean
}) => {
  const root = document.getElementById('___gatsby')
  const modalContent = useRef<any>(document.createElement('div'))
  const modalRoot = useRef<any>(document.getElementById(domNode))

  const eventListener = useRef((e: KeyboardEvent) =>
    handleKeyDown(e, props.toggle)
  )
  //const currentScrollPostion = useRef()

  // 1. Setup DOM node
  useEffect(() => {
    if (!modalRoot.current) {
      modalRoot.current = document.createElement('div')
      modalRoot.current.setAttribute('id', domNode)
      document.body.insertBefore(modalRoot.current, root)
    }

    return () => document.body.removeChild(modalRoot.current)
  }, [])

  // 2. Append modal content into DOM node
  useEffect(() => {
    const modalNode = document.getElementById(domNode)

    modalContent.current.style = `
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      height: 100%;
      width: 100%;
      background: none;
      padding: var(--basepadding);
      z-index: 2;
      opacity: 0;
      transition: opacity 0.15s ease-in;
      overflow: auto;
      -webkit-overflow-scrolling: touch;
      pointer-events: none;
    `
    if (modalNode) {
      modalNode.appendChild(modalContent.current)
    }
  }, [])

  // 3. Listen for changes to props.isShowing
  useEffect(
    () => {
      const blurNodes = Array.from(document.getElementsByClassName('blur-me'))

      if (props.isShowing) {
        //modifyDiv('___gatsby', 'freeze', currentScrollPostion)
        modalContent.current.style.opacity = '1'
        modalContent.current.style.pointerEvents = 'initial'

        if (!isMobile()) {
          document.addEventListener('keydown', eventListener.current)
        }

        // Blur!
        blurNodes.forEach(
          (node: any) =>
            (node.style = `
          transition: filter .35s var(--ease);
          filter: blur(10px);
        `)
        )
      } else {
        //modifyDiv('___gatsby', 'unfreeze', currentScrollPostion)
        modalContent.current.style.opacity = 0
        modalContent.current.style.pointerEvents = 'none'

        document.removeEventListener('keydown', eventListener.current)

        // Unblur!
        blurNodes.forEach(
          (node: any) =>
            (node.style = `
          transition: filter .35s var(--ease);
          filter: blur(0px);
        `)
        )
      }
    },
    [props.isShowing]
  )

  return modalContent.current
    ? ReactDOM.createPortal(
        <Modal {...props}>{children}</Modal>,
        modalContent.current
      )
    : null
}

const Modal = styled.div``

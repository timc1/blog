import { useState, useEffect } from 'react'

export default ({
  initialFocusRef,
  modalClosedFocusRef,
}: {
  initialFocusRef: any
  modalClosedFocusRef: any
}) => {
  try {
    const [isShowing, toggle] = useState(false)

    useEffect(
      () => {
        if (isShowing && initialFocusRef) {
          initialFocusRef.current.focus()
        } else if (modalClosedFocusRef) {
          modalClosedFocusRef.current.focus()
        }
      },
      [isShowing]
    )

    useEffect(
      () => {
        toggle(prevState => false)
      },
      [window.location.pathname]
    )

    const getTogglerProps = () => ({
      onClick: () => toggle(prevState => !prevState),
      isShowing,
    })

    const getMenuProps = (props: any) => ({
      isShowing,
      toggle,
      ...props,
    })

    const getMenuItemProps = (props: any) => ({
      tabIndex: isShowing ? 0 : -1,
      ...props,
    })

    return {
      isShowing,
      toggle,
      getTogglerProps,
      getMenuProps,
      getMenuItemProps,
    }
  } catch (err) {
    // Error will only happen when during Gatsby building process where window doesn't exist.
    return {
      isShowing: false,
      toggle: () => {},
      getTogglerProps: () => {},
      getMenuProps: () => {},
      getMenuItemProps: () => {},
    }
  }
}

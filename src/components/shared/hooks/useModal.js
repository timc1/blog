import { useState } from 'react'

export default () => {
  const [isShowing, toggle] = useState(false)

  const getTogglerProps = () => ({
    onClick: e => toggle(prevState => !prevState),
    isShowing,
  })

  const getMenuProps = props => ({
    isShowing,
    toggle,
    ...props,
  })

  return { isShowing, toggle, getTogglerProps, getMenuProps }
}

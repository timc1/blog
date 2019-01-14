import { useState } from 'react'

export default () => {
  const [isShowing, toggle] = useState(false)

  const getTogglerProps = () => ({
    onClick: () => toggle(prevState => !prevState),
    isShowing,
  })

  const getMenuProps = (props: any) => ({
    isShowing,
    toggle,
    ...props,
  })

  return { isShowing, toggle, getTogglerProps, getMenuProps }
}

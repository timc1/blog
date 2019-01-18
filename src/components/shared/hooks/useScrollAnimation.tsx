import { useRef, useEffect } from 'react'
import { isElementInView } from '../../../utils'

export default () => {
  try {
    const scrollRef = useRef(() => {
      const unanimatedElements: Array<HTMLElement> = Array.from(
        document.querySelectorAll('.animate-illustration:not(.animated)')
      )

      if (!unanimatedElements.length) {
        window.removeEventListener('scroll', scrollRef.current)
      } else {
        unanimatedElements.forEach(el => {
          if (isElementInView(el)) {
            el.classList.add('animated')
          }
        })
      }
    })

    useEffect(() => {
      const nodes = Array.from(
        document.querySelectorAll('.animate-illustration')
      )

      if (nodes.length) {
        window.addEventListener('scroll', scrollRef.current)
        scrollRef.current()
      }

      return () => window.removeEventListener('scroll', scrollRef.current)
    }, [])
  } catch (err) {
    // Nothing. Try catch only exists to avoid gatsby's 'document is undefined' during build.
  }
}

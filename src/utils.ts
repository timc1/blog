const isMobile = (): boolean => {
  if (typeof document !== `undefined`) {
    return 'ontouchstart' in document.documentElement === true
  }
  return false
}

const debounce = (func: () => any, wait: number, immediate: boolean) => {
  let timeout: NodeJS.Timer | null

  return () => {
    let later = function() {
      timeout = null
      if (!immediate) func()
    }

    let callNow = immediate && !timeout

    if (timeout) {
      clearTimeout(timeout)
    }

    timeout = setTimeout(later, wait)

    if (callNow) func()
  }
}

const isElementInView = (el: HTMLElement) => {
  const { top, bottom } = el.getBoundingClientRect()
  if (top < window.innerHeight - 100 && bottom > 100) {
    return true
  }
  return false
}

export { isMobile, debounce, isElementInView }

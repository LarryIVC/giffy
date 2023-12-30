import { useEffect, useRef, useState } from 'react'

export default function useNearScreen({ distance = '0px', externalRef, once = true } = {}) {
  const [show, setShow] = useState(false)
  const elementRef = useRef()
  // console.log(elementRef)

  const element = externalRef ? externalRef.current : elementRef.current

  useEffect(() => {
    let observer
    const onChange = (entries, observer) => {
      const el = entries[0]
      // console.log(el.isIntersecting)
      if (el.isIntersecting) {
        setShow(true)
        once && observer.disconnect()
      } else {
        !once && setShow(false)
      }
    }

    Promise.resolve(
      typeof IntersectionObserver !== 'undefined'
        ? IntersectionObserver
        : import('intersection-observer-polyfill')
    ).then(() => {
      observer = new IntersectionObserver(onChange, {
        rootMargin: distance
      })
      element && observer.observe(element)
    })
    return () => observer && observer.disconnect()
  }, [distance, show, element, once])
  return { isNear: show, elementRef }
}
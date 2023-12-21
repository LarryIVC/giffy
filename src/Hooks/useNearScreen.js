import { useEffect, useRef, useState } from 'react'

export default function useNearScreen({ distance = '0px', externalRef } = {}) {
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
        observer.disconnect()
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
  }, [distance, show, element])
  return { isNear: show, elementRef }
}
import { useEffect, useRef, useState } from 'react'

export default function useNearScreen({ distance = '100px' } = {}) {
  const [show, setShow] = useState(false)
  const elementRef = useRef()

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
      observer.observe(elementRef.current)
    })
    return () => observer && observer.disconnect()
  }, [distance, show])
  return { isNear: show, elementRef }
}
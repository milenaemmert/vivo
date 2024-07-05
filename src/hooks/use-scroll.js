import { useState, useEffect } from 'react'

const PAGE_TOP_OFFSET = 24

export const useScroll = () => {
  const [pageY, setPageY] = useState(0)
  const [isPageTop, setIsPageTop] = useState(true)

  useEffect(() => {
    const handlePageY = () => {
      setPageY(window.scrollY)

      if (window.scrollY <= PAGE_TOP_OFFSET) {
        setIsPageTop(true)
      } else {
        setIsPageTop(false)
      }
    }

    window.addEventListener('scroll', handlePageY)

    return () => window.removeEventListener('scroll', handlePageY)
  }, [])

  return { pageY, isPageTop }
}

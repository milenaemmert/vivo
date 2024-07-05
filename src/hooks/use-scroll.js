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

//pageY => ponto 0px do meu eixo Y
//o useEffect vai ser executado apenas quando o componente se montar, porque meu array de dependência de está vazio
//a função handlePageY vai ser a lógica para verificar com meu addEventListener se meu
//o removeEventListener serve para quando meu componente se desmontar, o addEventListener pare de ser escutado e pare de consumir memória sem necessidade
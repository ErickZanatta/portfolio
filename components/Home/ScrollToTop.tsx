'use client'

import { useEffect } from 'react'

const ScrollToTop = () => {
  useEffect(() => {
    // impede o navegador de restaurar a posição anterior ao recarregar
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual'
    }

    // remove o #secao da URL para o reload não pular para a seção
    if (window.location.hash) {
      window.history.replaceState(
        null,
        '',
        window.location.pathname + window.location.search
      )
    }

    window.scrollTo(0, 0)
  }, [])

  return null
}

export default ScrollToTop
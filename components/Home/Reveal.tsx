'use client'

import React, { useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(useGSAP, ScrollTrigger)

type Props = {
  children: React.ReactNode
  className?: string
  stagger?: boolean
}

const Reveal = ({ children, className, stagger = false }: Props) => {
  const ref = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      const el = ref.current
      if (!el) return

      const mm = gsap.matchMedia()

      // só anima se a pessoa não pediu "reduzir movimento" no sistema
      mm.add('(prefers-reduced-motion: no-preference)', () => {
        if (stagger) {
          // anima os elementos marcados com data-reveal-item, um por um
          const items = Array.from(
            el.querySelectorAll<HTMLElement>('[data-reveal-item]')
          )
          if (items.length === 0) return

          gsap.set(items, { opacity: 0, y: 40 })

          ScrollTrigger.batch(items, {
            start: 'top 90%',
            once: true,
            onEnter: (batch) =>
              gsap.to(batch, {
                opacity: 1,
                y: 0,
                duration: 0.8,
                ease: 'power3.out',
                stagger: 0.15,
              }),
          })
        } else {
          gsap.from(el, {
            opacity: 0,
            y: 40,
            duration: 0.9,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 85%',
              once: true,
            },
          })
        }
      })

      return () => mm.revert()
    },
    { scope: ref }
  )

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  )
}

export default Reveal
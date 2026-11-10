'use client'
import Image from 'next/image'
import React, { useRef } from 'react'
import { BsArrowRight } from 'react-icons/bs'
import Typewriter from 'typewriter-effect'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import ParticlesHero from './ParticleBackground'

gsap.registerPlugin(useGSAP)

const Hero = () => {
  const container = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      const mm = gsap.matchMedia()

      mm.add('(prefers-reduced-motion: no-preference)', () => {
        gsap.fromTo(
          '[data-hero]',
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            ease: 'power3.out',
            stagger: 0.2,
            delay: 0.2,
          }
        )
      })

      mm.add('(prefers-reduced-motion: reduce)', () => {
        gsap.set('[data-hero]', { opacity: 1 })
      })

      return () => mm.revert()
    },
    { scope: container }
  )

  return (
    <div
      ref={container}
      className="relative h-screen flex items-center justify-center text-white overflow-hidden flex-col"
    >
      <ParticlesHero />

      <div className="relative z-10 flex flex-col items-center">
        <Image
          data-hero
          src="/images/erick.png"
          alt="Foto de Erick Zanatta"
          width={300}
          height={300}
          loading="eager"
          className="w-[150px] h-[150px] aspect-square shrink-0 rounded-full object-cover object-[55%_30%] border-8 border-[#0c0c48aa] opacity-0"
        />

        <h1
          data-hero
          className="opacity-0 text-2xl sm:text-4xl md:text-5xl lg:text-6xl mt-6 text-center font-bold tracking-wide"
        >
          Criando produtos web,
          <br />
          sites e <span className="text-cyan-300">experiências.</span>
        </h1>

        <h2
          data-hero
          className="opacity-0 mt-5 text-sm px-2 text-center sm:text-2xl font-medium flex items-center"
        >
          Olá, eu sou o Erick -{' '}
          <span className="text-cyan-300 font-bold">
            <Typewriter
              options={{
                strings: [
                  'Desenvolvedor Front-End',
                  'Desenvolvedor Back-End',
                  'Desenvolvedor Web',
                ],
                autoStart: true,
                loop: true,
                delay: 75,
                deleteSpeed: 50,
                wrapperClassName: 'pl-2',
              }}
            />
          </span>
        </h2>

        <div data-hero className="opacity-0">
          <a
            href="#works"
            className="mt-6 inline-block px-10 py-4 bg-blue-800 hover:bg-blue-900 transition-all duration-300 hover:scale-110 cursor-pointer rounded-full text-lg font-medium"
          >
            <span>Ver meus projetos</span>
            <BsArrowRight className="w-5 h-5 ml-2 inline-block" />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Hero
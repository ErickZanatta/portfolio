'use client'

import React from 'react'
import {
  SiJavascript,
  SiNextdoor,
  SiNodedotjs,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from 'react-icons/si'

import Tilt from 'react-parallax-tilt'

const skills = [
  {
    name: 'JavaScript',
    icon: <SiJavascript />,
    percentage: 89,
  },
  {
    name: 'React.Js',
    icon: <SiReact />,
    percentage: 92,
  },
  {
    name: 'Next.Js',
    icon: <SiNextdoor />,
    percentage: 90,
  },
  {
    name: 'Node.js',
    icon: <SiNodedotjs />,
    percentage: 88,
  },
  {
    name: 'Tailwind CSS',
    icon: <SiTailwindcss />,
    percentage: 94,
  },
  {
    name: 'Typescript',
    icon: <SiTypescript />,
    percentage: 86,
  },
]

const Skills = () => {
  return (
    <div className="text-white pt-16 pb-16">
      <h1 className="text-center text-2xl font-bold md:text-4xl xl:text-5xl text-white">
        My <span className="text-cyan-300">Skills</span>
      </h1>
      <div className="flex flex-wrap justify-center gap-6 mt-16">
        {skills.map((skil) => {
          return (
            <Tilt key={skil.name} scale={1.5} transitionSpeed={400}>
              <div className="bg-[#14134145] text-center w-40 h-48 rounded-3xl flex flex-col items-center justify-center shadow-lg transition hover:scale-105">
                <div className="text-5xl mb-4 text-gray-300">{skil.icon}</div>
                <p className="text-2xl font-semibold">{skil.percentage}%</p>
                <p className="text-purple-400 mt-1">{skil.name}</p>
              </div>
            </Tilt>
          )
        })}
      </div>
    </div>
  )
}

export default Skills

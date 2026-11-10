import Image from 'next/image'
import React from 'react'

const projects = [
  {
    // TROQUE a imagem por um print do projeto em public/images/ (ex: /images/sabruno.png)
    image: '/images/p1.jpg',
    name: 'SaBruno - Sistema de Gestão Escolar',
    categories: 'Web App , React , Node.js',
    link: '', // cole aqui o link do GitHub ou do site (deixe '' se não tiver)
  },
  {
    // TROQUE a imagem por um print do projeto em public/images/ (ex: /images/amescadas.png)
    image: '/images/p2.jpg',
    name: 'AM Escadas - Site para Aluguel de Escadas',
    categories: 'Site , Next.js',
    link: '', // cole aqui o link do site no ar (deixe '' se não tiver)
  },
]

const Projects = () => {
  return (
    <div id="works" className="pt-16 pb-16 scroll-mt-[12vh]">
      <h1 className="text-center text-2xl md:text-4xl xl:text-5xl font-bold text-white ">
        Alguns dos meus
        <br /> <span className="text-cyan-300">projetos recentes</span>
      </h1>
      <div className="w-[70%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 mt-16">
        {projects.map((project) => {
          const card = (
            <div>
              <Image
                src={project.image}
                alt={project.name}
                width={800}
                height={650}
                className="rounded-lg"
              />
              <h1 className="mt-4 text-xl sm:text-2xl font-semibold text-white">
                {project.name}
              </h1>
              <h1 className="pt-2 font-medium text-white/70 ">
                {project.categories}
              </h1>
            </div>
          )

          return project.link ? (
            <a
              key={project.name}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              {card}
            </a>
          ) : (
            <div key={project.name}>{card}</div>
          )
        })}
      </div>
    </div>
  )
}

export default Projects
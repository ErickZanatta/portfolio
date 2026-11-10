import React from 'react'
import ResumeCard from './ResumeCard'
import { FaReact, FaNodeJs, FaCodepen, FaCheckCircle } from 'react-icons/fa'
import { BsDatabase } from 'react-icons/bs'
import { BiBadge } from 'react-icons/bi'

const technicalSkills = [
  {
    Icon: FaReact,
    role: 'Front-End',
    description:
      'Interfaces com React e Next.js, estilização com Tailwind CSS e foco em sites responsivos.',
  },
  {
    Icon: FaNodeJs,
    role: 'Back-End',
    description:
      'APIs com Node.js e Express, integração com banco de dados usando Sequelize.',
  },
  {
    Icon: BsDatabase,
    role: 'Banco de Dados',
    description:
      'Modelagem de dados (DER), SQL e normalização de tabelas relacionais.',
  },
]

const otherSkills = [
  {
    Icon: FaCheckCircle,
    role: 'Testes de Software',
    description:
      'Planejamento e execução de testes para garantir a qualidade do sistema.',
  },
  {
    Icon: FaCodepen,
    role: 'Projetos Full-Stack',
    description:
      'Desenvolvimento de aplicações completas, do front-end ao back-end.',
  },
  {
    Icon: BiBadge,
    role: 'Projetos para Clientes',
    description:
      'Criação de sites para negócios locais, do levantamento à publicação.',
  },
]

const Resume = () => {
  return (
    <div className="pt-20 pb-16">
      <div className="w-[90%] sm:w-[70%] mx-auto grid grid-cols-1 xl:grid-cols-2 gap-10">
        {/* COMPETÊNCIAS TÉCNICAS */}
        <div>
          <h1
            data-reveal-item
            className="text-3xl sm:text-4xl font-bold text-white"
          >
            Competências <span className="text-cyan-300">Técnicas</span>
          </h1>
          <div className="mt-10">
            {technicalSkills.map((item) => (
              <div key={item.role} data-reveal-item>
                <ResumeCard {...item} />
              </div>
            ))}
          </div>
        </div>

        {/* OUTRAS COMPETÊNCIAS */}
        <div>
          <h1
            data-reveal-item
            className="text-3xl sm:text-4xl font-bold text-white"
          >
            Outras <span className="text-cyan-300">Competências</span>
          </h1>
          <div className="mt-10">
            {otherSkills.map((item) => (
              <div key={item.role} data-reveal-item>
                <ResumeCard {...item} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Resume
import React from 'react'
import ServicesCard from './ServicesCard'

const services = [
  {
    icon: '/images/s1.jpg',
    name: 'Front-End',
    description:
      'Criando interfaces responsivas, intuitivas e agradáveis de usar com React.',
  },
  {
    icon: '/images/s2.png',
    name: 'Sites e Aplicações Web',
    description:
      'Desenvolvendo sites e aplicações web completas, do layout à publicação.',
  },
  {
    icon: '/images/s3.png',
    name: 'Banco de Dados',
    description:
      'Modelando e organizando dados com SQL para aplicações eficientes.',
  },
  {
    icon: '/images/s4.png',
    name: 'Back-End',
    description:
      'Construindo APIs e sistemas com Node.js e Express, simples e eficientes.',
  },
]

const Services = () => {
  return (
    <div className="pt-16 pb-16">
      <h1
        data-reveal-item
        className="text-center text-2xl md:text-4xl xl:text-5xl font-bold text-white "
      >
        Criando experiências <br /> web simples, rápidas <br /> e de alto
        impacto
      </h1>
      <div className="w-[90%] sm:w-[70%] mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10 mt-20 items-center">
        {services.map((service) => (
          <div key={service.name} data-reveal-item>
            <ServicesCard
              icon={service.icon}
              name={service.name}
              description={service.description}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Services
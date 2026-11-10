import React from 'react'
import { FaEnvelope, FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa'
import { IconType } from 'react-icons'

type ContactItem = {
  Icon: IconType
  label: string
  value: string
  href: string
}

const contacts: ContactItem[] = [
  {
    Icon: FaEnvelope,
    label: 'E-mail',
    value: 'erickzanatta78@gmail.com',
    href: 'mailto:erickzanatta78@gmail.com',
  },
  {
    Icon: FaLinkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/erick-zanatta',
    href: 'https://www.linkedin.com/in/erick-zanatta-198564357/',
  },
  {
    Icon: FaGithub,
    label: 'GitHub',
    value: 'github.com/ErickZanatta',
    href: 'https://github.com/ErickZanatta',
  },
  {
    Icon: FaWhatsapp,
    label: 'WhatsApp',
    value: '(48) 99162-8398',
    href: 'https://wa.me/5548991628398',
  },
]

const Contact = () => {
  const visibleContacts = contacts.filter((item) => item.href)

  return (
    <div className="pt-16 pb-24">
      <h1
        data-reveal-item
        className="text-center text-2xl md:text-4xl xl:text-5xl font-bold text-white"
      >
        Vamos <span className="text-cyan-300">conversar?</span>
      </h1>
      <p
        data-reveal-item
        className="text-center text-gray-300 text-sm sm:text-base mt-4 w-[90%] sm:w-[60%] mx-auto"
      >
        Tem um projeto em mente ou quer trocar uma ideia? Entre em contato por
        qualquer um dos canais abaixo.
      </p>

      <div className="w-[90%] sm:w-[70%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
        {visibleContacts.map((item) => (
          <div key={item.label} data-reveal-item>
            <a
              href={item.href}
              target={item.href.startsWith('mailto:') ? undefined : '_blank'}
              rel="noopener noreferrer"
              className="flex items-center space-x-6 bg-blue-950/20 hover:bg-blue-950/50 transition-all duration-300 p-4 sm:p-8 rounded-md"
            >
              <div className="sm:w-14 sm:h-14 w-10 h-10 bg-blue-950 rounded-full flex items-center justify-center shrink-0">
                <item.Icon className="sm:w-8 sm:h-8 w-6 h-6 text-white" />
              </div>
              <div className="min-w-0">
                <h2 className="text-gray-200 text-xl sm:text-2xl font-semibold">
                  {item.label}
                </h2>
                <p className="text-gray-300 text-sm sm:text-base break-words">
                  {item.value}
                </p>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Contact
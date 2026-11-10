import React from 'react'
import Hero from './Hero/Hero'
import Services from './Services/Services'
import Resume from './Resume/Resume'
import Projects from './Projects/Projects'
import Skills from './Skills/Skills'
import Contact from './Contact/Contact'
import Reveal from './Reveal'
import ScrollToTop from './ScrollToTop'

const Home = () => {
  return (
    <div className="overflow-hidden">
      <ScrollToTop />
      <div id="home">
        <Hero />
      </div>
      <div id="services" className="scroll-mt-[12vh]">
        <Reveal stagger>
          <Services />
        </Reveal>
      </div>
      <div id="resume" className="scroll-mt-[12vh]">
        <Reveal stagger>
          <Resume />
        </Reveal>
      </div>
      <Reveal>
        <Projects />
      </Reveal>
      <div id="skills" className="scroll-mt-[12vh]">
        <Reveal>
          <Skills />
        </Reveal>
      </div>
      <div id="contact" className="scroll-mt-[12vh]">
        <Reveal stagger>
          <Contact />
        </Reveal>
      </div>
    </div>
  )
}

export default Home
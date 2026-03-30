import Image from 'next/image'
import React from 'react'

const Projects = () => {
  return (
    <div className="pt-16 pb-16">
      <h1 className="text-center text-2xl md:text-4xl xl:text-5xl font-bold text-white ">
        A small selection of recent
        <br /> <span className="text-cyan-300">projects</span>
      </h1>
      <div className="w-[70%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 mt-16">
        <div>
          <Image
            src="/images/p1.jpg"
            alt="project-1"
            width={800}
            height={650}
            className="rounded-lg"
          />
          <h1 className="mt-4 text-xl sm:text-2xl font-semibold text-white">
            Modern Finance Dashboard UI
          </h1>
          <h1 className="pt-2 font-medium text-white/70 ">Apps , UI/UX</h1>
        </div>
        {/* ------Image------ */}
        <div>
          <Image
            src="/images/p2.jpg"
            alt="project-1"
            width={800}
            height={650}
            className="rounded-lg"
          />
          <h1 className="mt-4 text-xl sm:text-2xl font-semibold text-white">
            Porfolio Website for Creatives
          </h1>
          <h1 className="pt-2 font-medium text-white/70 ">Branding , Motion</h1>
        </div>
        {/* ------Image------ */}
        <div>
          <Image
            src="/images/p3.jpg"
            alt="project-1"
            width={800}
            height={650}
            className="rounded-lg"
          />
          <h1 className="mt-4 text-xl sm:text-2xl font-semibold text-white">
            Brand , Identity for Startups
          </h1>
          <h1 className="pt-2 font-medium text-white/70 ">Branding , UI/UX</h1>
        </div>
        {/* ------Image------ */}
        <div>
          <Image
            src="/images/p4.jpg"
            alt="project-1"
            width={800}
            height={650}
            className="rounded-lg"
          />
          <h1 className="mt-4 text-xl sm:text-2xl font-semibold text-white">
            SaaS Dashboard Development
          </h1>
          <h1 className="pt-2 font-medium text-white/70 ">Apps , UI/UX</h1>
        </div>
      </div>
    </div>
  )
}

export default Projects

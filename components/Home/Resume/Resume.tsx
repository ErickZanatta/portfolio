import React from 'react'
import ResumeCard from './ResumeCard'
import { FaCodepen, FaReact } from 'react-icons/fa'
import { BsDatabase } from 'react-icons/bs'
import { BiBadge } from 'react-icons/bi'

const Resume = () => {
  return (
    <div className="pt-20 pb-16">
      <div className="w-[90%] sm:w-[70%] mx-auto grid grid-cols-1 xl:grid-cols-2 gap-10">
        {/* WORK PART */}
        <div>
          <h1 className="text-3xl sm:text-4xl font-bold text-white">
            My Work <span className="text-cyan-300 ">Experience</span>
          </h1>
          <div className="mt-10">
            <ResumeCard Icon={FaCodepen} role="Full-Stack Developer" />
            <ResumeCard Icon={FaReact} role="Front-End Developer" />
            <ResumeCard Icon={BsDatabase} role="Back-End Developer" />
          </div>
        </div>
        {/* EDUCATION PART */}
        <div>
          <h1 className="text-3xl sm:text-4xl font-bold text-white">
            My <span className="text-cyan-300 ">Education</span>
          </h1>
          <div className="mt-10">
            <ResumeCard
              Icon={BiBadge}
              role="Design Institute of Technology"
              date="Jan 2023 - dec 2024"
            />
            <ResumeCard
              Icon={FaReact}
              role="Bachelor in Computer Science"
              date="Jan 2019 - dec 2020"
            />
            <ResumeCard
              Icon={BsDatabase}
              role="Certificate in Digital Marketing"
              date="Jan 2021 - dec 2021"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Resume

import React from 'react'
import { FaCss3, FaFigma, FaHtml5, FaJs, FaReact } from "react-icons/fa";

const Experience = () => {
  return (
    <div>
      <div id="Experience" className="p-10 md:p-24 text-white">
        {/* Education Section */}  
        <div className="max-w-3xl mx-auto">
          <h1 className="text-xl md:text-3xl font-bold mb-6">Education</h1>
          <div className="relative border-l-2 border-yellow-500 pl-6">
            {/* Timeline item 1 */}
            <div className="mb-8 ml-4 relative">
              <h3 className="font-semibold text-lg">Pune Institute Of Computer Technology</h3>
              <p className="text-yellow-400 font-semibold">2023– Present</p>
              <p>BE in Computer Engineering</p>
            </div>
            {/* Timeline item 2 */}
            <div className="mb-8 ml-4 relative">
              <h3 className="font-semibold text-lg">Gurudev Junior College of Science</h3>
              <p className="text-yellow-400 font-semibold">2020– 2022</p>
              <p>Higher Secondary Certificate (HSC)</p>
            </div>
            {/* Timeline item 3 */}
            <div className="mb-8 ml-4 relative">
              <h3 className="font-semibold text-lg">Carmel Convent English Medium High School</h3>
              <p className="text-yellow-400 font-semibold">2009– 2020</p>
              <p>Secondary School Certificate (SSC)</p>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="max-w-3xl mx-auto mt-16">
          <h1 className="text-xl md:text-3xl font-bold mb-6">Skills</h1>
          <div className="flex flex-wrap gap-3">
            {[
              "React", "Next.js", "Node.js", "Python","C++", "MongoDB", "HTML5", "CSS3", "JavaScript", "NodeJS", "Express", "Postman", "GitHub", "NumPy", "Pandas"
            ].map((skill, index) => (
              <span key={index} className="bg-white text-black rounded-full px-4 py-1 text-sm font-semibold">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Experience

import { Download } from 'lucide-react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

export default function HomeSection() {
  return (
    <section id="home"
      className="min-h-screen flex items-center
                 bg-slate-50 px-6 pt-24">

      <div className="max-w-6xl mx-auto w-full">

        <p className="text-blue-600 font-bold text-5xl md:text-7xl mb-2 tracking-tight">
          Hi, I am
        </p>

        <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-6 tracking-tight">
          Wilkens JOSEPH
        </h1>

        {/* <h2 className="text-2xl md:text-3xl
                       text-slate-700 font-semibold mb-6">
          Software Developer
        </h2> */}

        <p className="text-slate-600 max-w-2xl
                      text-lg leading-relaxed mb-8">
          I hold a Master's-level degree in Computer Engineering from ENSEEIHT in Toulouse (France)
          , a top-ranked and competitive engineering school.
        </p>

        <p className="text-slate-600 max-w-2xl
                    text-lg leading-relaxed mb-8">
          Before joining ENSEEIHT, I earned a Bachelor's degree in 
          Computer Science at the University of Toulouse. 
          During my engineering studies, I focused on Systems and Network Architecture 
          before specializing in Embedded Systems in my final year. I also took coursework in software development, 
          cloud computing, AI, and cybersecurity.
        </p>

        <p className="text-slate-600 max-w-2xl
                      text-lg leading-relaxed mb-8"> 
          Today, I work across the stack, 
          from low-level hardware programming to higher-level software applications.
        </p>


        <div className="flex flex-wrap gap-4">

          <a href="#projects"
             className="bg-blue-600 hover:bg-blue-700 shadow-sm
                        text-white px-6 py-3 rounded-lg font-medium transition">
            View My Projects
          </a>

        <a
          href="https://drive.google.com/file/d/16O0qErEDInD92NGkKYIbgdp0EJ1i5iEF/view?usp=sharing"
          target="_blank"
          rel="noreferrer"
          className="border border-slate-300 bg-white hover:bg-slate-100 text-slate-700 shadow-sm
                    px-6 py-3 rounded-lg flex items-center gap-2 font-medium transition"
        >
          <Download size={18} /> View CV
        </a>

        </div>

        {/*<div className="flex gap-5 mt-10 text-slate-500">
          <a href="https://github.com/"
             target="_blank" rel="noreferrer"
             className="hover:text-blue-600 transition">
            <FaGithub size={24} />
          </a>

          <a href="https://linkedin.com/"
             target="_blank" rel="noreferrer"
             className="hover:text-blue-600 transition">
            <FaLinkedin size={24} />
          </a>
        </div>*/}

      </div>
    </section>
  )
}
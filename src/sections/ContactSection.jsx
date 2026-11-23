import SectionTitle from '../components/SectionTitle'
import { Mail } from 'lucide-react'
import { FaLinkedin, FaGithub } from 'react-icons/fa'

export default function ContactSection() {
  return (
    <section id="contact"
      className="bg-slate-50 px-6 py-24 scroll-mt-20">

      <div className="max-w-6xl mx-auto">

        <SectionTitle
          subtitle="Get In Touch"
          title="Contact Me"
        />

        <p className="text-slate-600 max-w-xl mb-10 leading-relaxed">
          I'm always open to discussing new projects,
          opportunities and collaborations.
          Feel free to reach out!
        </p>

        <div className="flex flex-col gap-6">

          <a href="mailto:your.email@example.com"
             className="flex items-center gap-4 text-slate-700 hover:text-blue-600 font-medium transition">
            <Mail /> marcjohnley@icloud.com
          </a>

          <a href="https://linkedin.com/in/wilkensmc"
             className="flex items-center gap-4 text-slate-700 hover:text-blue-600 font-medium transition">
            <FaLinkedin size={20} /> LinkedIn
          </a>

          <a href="https://github.com/WilkensMarcJohnley"
             className="flex items-center gap-4 text-slate-700 hover:text-blue-600 font-medium transition">
            <FaGithub size={20} /> GitHub
          </a>

        </div>

      </div>
    </section>
  )
}
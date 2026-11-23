import { Link } from 'react-router-dom'
import { Menu } from 'lucide-react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

const base = import.meta.env.BASE_URL

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50
                    bg-slate-50/90 backdrop-blur-md
                    border-b border-slate-200">

      <div className="max-w-6xl mx-auto px-6 py-4
                      flex justify-between items-center">

        <Link
          to="/"
          className="text-2xl font-bold text-slate-900"
        >
          Wilkens JOSEPH<span className="text-blue-600">.</span>
        </Link>

        <div className="hidden md:flex items-center gap-8">

          <a href={`${base}#home`}
             className="text-slate-600 hover:text-blue-600 font-medium transition">
            Home
          </a>

          <a href={`${base}#projects`}
             className="text-slate-600 hover:text-blue-600 font-medium transition">
            Projects
          </a>

          <Link to="/skills"
                className="text-slate-600 hover:text-blue-600 font-medium transition">
            Skills
          </Link>

          <Link to="/experience"
                className="text-slate-600 hover:text-blue-600 font-medium transition">
            Experience
          </Link>

          <a href={`${base}#contact`}
             className="text-slate-600 hover:text-blue-600 font-medium transition">
            Contact
          </a>

        </div>

        <div className="hidden md:flex gap-4 text-slate-600">
          <a href="https://github.com/WilkensMarcJohnley" target="_blank"
             rel="noreferrer"
             className="hover:text-blue-600 transition">
            <FaGithub size={20} />
          </a>

          <a href="https://linkedin.com/in/wilkensmc" target="_blank"
             rel="noreferrer"
             className="hover:text-blue-600 transition">
            <FaLinkedin size={20} />
          </a>
        </div>

        <button className="md:hidden text-slate-800">
          <Menu />
        </button>

      </div>
    </nav>
  )
}
import { ExternalLink } from 'lucide-react'
import { FaGithub } from 'react-icons/fa'

export default function ProjectCard({ project }) {
  return (
    <article className="group relative bg-slate-700 hover:bg-slate-600/95 rounded-2xl 
                        border border-slate-600 hover:border-blue-400 
                        p-7 shadow-md hover:shadow-xl hover:-translate-y-1.5 
                        transition-all duration-300 flex flex-col justify-between">
      
      <div>
        <h3 className="text-xl font-bold text-white group-hover:text-blue-300 transition-colors mb-3">
          {project.title}
        </h3>

        <p className="text-slate-100 text-sm leading-relaxed mb-6">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-8">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="text-xs font-semibold px-2.5 py-1 rounded-md bg-slate-800/70 text-slate-100 border border-slate-500/60
                         group-hover:bg-blue-900/60 group-hover:text-blue-200 group-hover:border-blue-400/50 transition-colors"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      <div className="pt-4 border-t border-slate-600 flex items-center justify-between">
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-slate-200 hover:text-white transition-colors"
          >
            <FaGithub size={17} />
            <span>Code</span>
          </a>
        )}

        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-300 hover:text-blue-200 transition-colors"
          >
            <span>Live Demo</span>
            <ExternalLink size={15} />
          </a>
        )}
      </div>
    </article>
  )
}
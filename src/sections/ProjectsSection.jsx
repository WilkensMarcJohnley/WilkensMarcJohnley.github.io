import SectionTitle from '../components/SectionTitle'
import ProjectCard from '../components/ProjectCard'
import { projects } from '../data/projects'

export default function ProjectsSection() {
  return (
    <section id="projects"
      className="bg-slate-100/70 px-6 py-24 scroll-mt-20 border-t border-b border-slate-200/60">

      <div className="max-w-6xl mx-auto">

        <SectionTitle
          subtitle="My Work"
          title="Featured Projects"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
            />
          ))}

        </div>

      </div>
    </section>
  )
}
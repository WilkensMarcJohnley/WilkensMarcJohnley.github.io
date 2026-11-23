import SectionTitle from '../components/SectionTitle'
import { skills } from '../data/skills'

export default function Skills() {
  return (
    <main className="min-h-screen bg-slate-50
                     px-6 pt-32 pb-24">

      <div className="max-w-6xl mx-auto">

        <SectionTitle
          subtitle="What I Know"
          title="Technical Skills"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {skills.map((group) => (
            <div key={group.category}
                 className="bg-white border border-slate-200
                            rounded-xl p-6 shadow-sm hover:shadow-md transition">

              <h3 className="text-xl font-bold text-slate-900 mb-6">
                {group.category}
              </h3>

              <div className="flex flex-wrap gap-3">
                {group.items.map((skill) => (
                  <span key={skill}
                        className="bg-blue-50 border border-blue-200/60 text-blue-700
                                   font-medium px-3 py-2 rounded-lg text-sm">
                    {skill}
                  </span>
                ))}
              </div>

            </div>
          ))}

        </div>

      </div>
    </main>
  )
}
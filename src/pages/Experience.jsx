import SectionTitle from '../components/SectionTitle'
import { experience } from '../data/experience'

export default function Experience() {
  return (
    <main className="min-h-screen bg-slate-50 px-6 pt-32 pb-24">
      <div className="max-w-6xl mx-auto">
        <SectionTitle
          subtitle="My Journey"
          title="Experience"
        />

        <div className="border-l-2 border-blue-500 ml-2 pl-8 space-y-12">
          {experience.map((item, index) => (
            <div key={index} className="relative">
              <div
                className="absolute -left-[41px] top-1
                           w-4 h-4 rounded-full bg-blue-500 shadow-sm"
              />

              <p className="text-blue-600 font-semibold mb-2">
                {item.period}
              </p>

              <h3 className="text-xl font-bold text-slate-900">
                {item.role}
              </h3>

              <p className="text-slate-700 font-medium mb-3">
                {item.company}
              </p>

              {item.highlights ? (
                <ul className="space-y-2 list-disc list-outside ml-4 text-slate-600 leading-relaxed">
                  {item.highlights.map((point, i) => (
                    <li key={i} className="pl-1">
                      {point}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
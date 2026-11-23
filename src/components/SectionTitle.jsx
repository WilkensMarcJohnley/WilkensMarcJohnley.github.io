export default function SectionTitle({ title, subtitle }) {
  return (
    <div className="mb-12">
      <p className="text-blue-600 font-semibold uppercase tracking-widest
                    text-sm mb-2">
        {subtitle}
      </p>

      <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
        {title}
      </h2>

      <div className="w-16 h-1 bg-blue-600 mt-4 rounded" />
    </div>
  )
}
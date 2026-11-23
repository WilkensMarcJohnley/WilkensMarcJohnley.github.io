const currentYear = new Date().getFullYear()

export default function Footer() {
  return (
    <footer className="bg-slate-100 border-t border-slate-200
                       text-center py-8">

      <p className="text-slate-500 text-sm">
        © {currentYear} Wilkens JOSEPH.
        All rights reserved.
      </p>

      <p className="text-slate-400 text-xs mt-2">
        Built with React and Tailwind CSS.
      </p>

    </footer>
  )
}
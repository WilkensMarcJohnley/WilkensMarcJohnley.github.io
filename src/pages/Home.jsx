import { useEffect } from 'react'

import HomeSection from '../sections/HomeSection'
import ProjectsSection from '../sections/ProjectsSection'
import ContactSection from '../sections/ContactSection'

export default function Home() {

  useEffect(() => {
    const section = window.location.hash.slice(1)

    if (section) {
      requestAnimationFrame(() => {
        document.getElementById(section)?.scrollIntoView()
      })
    }
  }, [])

  return (
    <main>
      <HomeSection />
      <ProjectsSection />
      <ContactSection />
    </main>
  )
}
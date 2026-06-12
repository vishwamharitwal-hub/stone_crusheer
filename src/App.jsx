import { useEffect } from 'react'
import Lenis from 'lenis'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import Cursor           from './components/Cursor'
import Navbar           from './components/Navbar'
import Hero             from './components/Hero'
import BrandStory       from './components/BrandStory'
import CorePillars      from './components/CorePillars'
import Collections      from './components/Collections'
import ProjectGallery   from './components/ProjectGallery'
import WhyChooseUs      from './components/WhyChooseUs'
import ConsultationCTA  from './components/ConsultationCTA'
import Footer           from './components/Footer'

import './App.css'

gsap.registerPlugin(ScrollTrigger)

export default function App() {
  useEffect(() => {
    // Smooth scroll
    const lenis = new Lenis({
      duration: 1.6,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    })

    const raf = (time) => { lenis.raf(time); requestAnimationFrame(raf) }
    requestAnimationFrame(raf)

    // Sync GSAP ScrollTrigger with Lenis
    lenis.on('scroll', ScrollTrigger.update)
    gsap.ticker.add((time) => lenis.raf(time * 1000))
    gsap.ticker.lagSmoothing(0)

    return () => {
      lenis.destroy()
      gsap.ticker.remove((time) => lenis.raf(time * 1000))
    }
  }, [])

  return (
    <>
      <div className="noise" aria-hidden="true" />
      <Cursor />
      <Navbar />
      <main>
        <Hero />
        <BrandStory />
        <CorePillars />
        <Collections />
        <ProjectGallery />
        <WhyChooseUs />
        <ConsultationCTA />
      </main>
      <Footer />
    </>
  )
}

import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'

const NAV = ['Collections', 'Projects', 'About', 'Contact']

export default function Navbar() {
  const ref      = useRef(null)
  const [scrolled, setScrolled] = useState(false)
  const [open,    setOpen]    = useState(false)

  useEffect(() => {
    gsap.fromTo(ref.current,
      { y: -30, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.2, ease: 'power4.out', delay: 0.4 }
    )
    const onScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      ref={ref}
      style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 500,
        padding: '1.4rem clamp(1.5rem, 6vw, 6rem)',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        background: scrolled ? 'rgba(18,18,18,0.92)' : 'transparent',
        backdropFilter: scrolled ? 'blur(24px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(200,169,126,0.1)' : '1px solid transparent',
        transition: 'background 0.5s ease, border-color 0.5s ease, backdrop-filter 0.5s ease',
      }}
    >
      {/* Logo */}
      <a href="#home" style={{ textDecoration: 'none', display: 'flex', flexDirection: 'column', gap: '1px' }}>
        <span style={{
          fontFamily: 'var(--font-display)', fontSize: '1.45rem',
          fontWeight: 400, letterSpacing: '0.12em', color: 'var(--text-light)',
          lineHeight: 1,
        }}>
          <span style={{ color: 'var(--gold)', fontWeight: 500 }}>DSS</span> Stone World
        </span>
        <span className="navbar-subtitle" style={{
          fontFamily: 'var(--font-body)', fontSize: '0.55rem',
          letterSpacing: '0.4em', color: 'var(--gold)',
          textTransform: 'uppercase', lineHeight: 1,
        }}>
          Premium Natural Stone
        </span>
      </a>

      {/* Desktop nav */}
      <nav style={{ alignItems: 'center', gap: '2.8rem' }}
        className="hidden md:flex">
        {NAV.map(n => (
          <a key={n} href={`#${n.toLowerCase()}`} className="nav-link">{n}</a>
        ))}
        <a href="#contact" className="btn-primary" style={{ padding: '0.7rem 1.8rem' }}>
          Get Consultation
        </a>
      </nav>

      {/* Mobile toggle */}
      <button
        onClick={() => setOpen(o => !o)}
        style={{ background: 'none', border: 'none', cursor: 'none', padding: '8px', display: 'flex', flexDirection: 'column', gap: '6px', minWidth: '44px', minHeight: '44px', alignItems: 'center', justifyContent: 'center' }}
        className="flex md:hidden"
        aria-label="Toggle menu"
      >
        {[0,1,2].map(i => (
          <span key={i} style={{
            display: 'block', width: '22px', height: '1px',
            background: 'var(--gold)',
            transition: 'all 0.3s ease',
            transform: open && i === 0 ? 'rotate(45deg) translate(5px,5px)' :
                       open && i === 1 ? 'scaleX(0)' :
                       open && i === 2 ? 'rotate(-45deg) translate(5px,-5px)' : 'none',
          }} />
        ))}
      </button>

      {/* Mobile drawer */}
      <div style={{
        position: 'fixed', inset: 0, top: '70px', zIndex: 400,
        background: 'rgba(18,18,18,0.97)', backdropFilter: 'blur(24px)',
        padding: '4rem clamp(1.5rem,6vw,6rem)',
        display: 'flex', flexDirection: 'column', gap: '2.5rem',
        transform: open ? 'translateX(0)' : 'translateX(100%)',
        transition: 'transform 0.5s var(--ease-luxury)',
      }}>
        {NAV.map(n => (
          <a key={n} href={`#${n.toLowerCase()}`}
            onClick={() => setOpen(false)}
            style={{
              fontFamily: 'var(--font-display)', fontSize: '2.8rem', fontWeight: 300,
              color: 'var(--text-light)', textDecoration: 'none', letterSpacing: '0.02em',
            }}>
            {n}
          </a>
        ))}
        <a href="#contact" className="btn-primary" style={{ alignSelf: 'flex-start', marginTop: '1rem' }}
          onClick={() => setOpen(false)}>
          Get Consultation
        </a>
      </div>
    </header>
  )
}

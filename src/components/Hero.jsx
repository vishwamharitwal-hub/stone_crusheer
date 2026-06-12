import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

export default function Hero() {
  const sectionRef = useRef(null)
  const imgRef     = useRef(null)
  const overlayRef = useRef(null)

  useEffect(() => {
    // Parallax on scroll
    const onScroll = () => {
      const scrollY = window.scrollY
      if (imgRef.current) {
        imgRef.current.style.transform = `scale(1.08) translateY(${scrollY * 0.3}px)`
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })

    // Entrance animation
    const tl = gsap.timeline({ delay: 0.2 })
    tl
      .fromTo('.hero-badge',  { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 1, ease: 'power3.out' })
      .fromTo('.hero-word',   { y: '105%' },          { y: '0%', duration: 1.3, ease: 'power4.out', stagger: 0.06 }, '-=0.5')
      .fromTo('.hero-sub',    { y: 24, opacity: 0 }, { y: 0, opacity: 1, duration: 1, ease: 'power3.out' }, '-=0.6')
      .fromTo('.hero-ctas',   { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' }, '-=0.5')
      .fromTo('.hero-scroll', { opacity: 0 },         { opacity: 1, duration: 0.6 }, '-=0.2')

    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <section
      id="home"
      ref={sectionRef}
      style={{
        position: 'relative', minHeight: '100vh',
        display: 'flex', alignItems: 'flex-end',
        overflow: 'hidden',
      }}
    >
      {/* Background image */}
      <div
        ref={imgRef}
        style={{
          position: 'absolute', inset: 0,
          transform: 'scale(1.08)',
          willChange: 'transform',
        }}
      >
        <img
          src="/stone1.png"
          alt="Premium stone slab — hero"
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
          loading="eager"
        />
      </div>

      {/* Multi-layer overlay */}
      <div ref={overlayRef} style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(to bottom, rgba(18,18,18,0.2) 0%, rgba(18,18,18,0.35) 40%, rgba(18,18,18,0.82) 100%)',
      }} />
      {/* Side vignette */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'radial-gradient(ellipse at center, transparent 50%, rgba(18,18,18,0.55) 100%)',
      }} />

      {/* Cinematic inset keyline frame */}
      <div aria-hidden="true" style={{
        position: 'absolute', inset: 'clamp(1rem, 2.5vw, 2.2rem)',
        border: '1px solid rgba(200,169,126,0.16)',
        pointerEvents: 'none', zIndex: 2,
      }} />

      {/* Content */}
      <div style={{
        position: 'relative', zIndex: 2,
        padding: 'clamp(6rem,10vw,9rem) clamp(1.5rem,6vw,6rem)',
        width: '100%', maxWidth: '1480px', margin: '0 auto',
        paddingBottom: 'clamp(5rem,8vw,7rem)',
      }}>
        {/* Eyebrow */}
        <div className="hero-badge" style={{
          display: 'inline-flex', alignItems: 'center', gap: '1rem',
          marginBottom: '2.4rem',
        }}>
          <span className="gold-line" />
          <span className="eyebrow" style={{ color: 'var(--gold)' }}>
            Premium Natural Stone · Est. 2009
          </span>
        </div>

        {/* Headline — split words */}
        <h1 style={{ marginBottom: '2rem' }}>
          {["Nature's", "Strength.", "Crafted Into", "Timeless", "Design."].map((w, i) => (
            <div key={i} style={{ overflow: 'hidden', display: 'block' }}>
              <span className="hero-word" style={{
                display: 'block',
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(3rem, 7.5vw, 8rem)',
                fontWeight: 300,
                lineHeight: 0.95,
                letterSpacing: '-0.02em',
                color: i === 3 ? 'var(--gold)' : 'var(--text-light)',
                fontStyle: i === 4 ? 'italic' : 'normal',
              }}>
                {w}
              </span>
            </div>
          ))}
        </h1>

        {/* Subheadline + CTAs */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%,360px), 1fr))',
          gap: '2.5rem',
          alignItems: 'flex-end',
          maxWidth: '900px',
        }}>
          <p className="hero-sub body-lg" style={{ color: 'rgba(248,248,248,0.7)', maxWidth: '480px' }}>
            Premium natural stone solutions for architecture, interiors, and extraordinary spaces.
          </p>
          <div className="hero-ctas" style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center' }}>
            <a href="#collections" className="btn-primary">
              Explore Collection
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M1 7h12M8 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a href="#contact" className="btn-ghost">Request Consultation</a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="hero-scroll" style={{
          position: 'absolute', bottom: 'clamp(2rem,4vw,3.5rem)', right: 'clamp(1.5rem,6vw,6rem)',
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem',
        }}>
          <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.6rem', letterSpacing: '0.35em',
            color: 'rgba(248,248,248,0.4)', textTransform: 'uppercase', writingMode: 'vertical-rl' }}>
            Scroll
          </span>
          <div style={{
            width: '1px', height: '56px',
            background: 'linear-gradient(to bottom, var(--gold), transparent)',
            animation: 'pulse 2s ease-in-out infinite',
          }} />
        </div>
      </div>

      {/* Bottom marquee strip */}
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0, zIndex: 3,
        borderTop: '1px solid rgba(200,169,126,0.15)',
        background: 'rgba(18,18,18,0.6)',
        backdropFilter: 'blur(12px)',
        padding: '0.9rem 0', overflow: 'hidden',
      }}>
        <div className="marquee-inner" style={{ gap: '3rem' }}>
          {['Italian Marble','✦','Premium Granite','✦','Quartzite','✦','Onyx','✦','Travertine','✦',
            'Architectural Stone','✦','Custom Fabrication','✦',
            'Italian Marble','✦','Premium Granite','✦','Quartzite','✦','Onyx','✦','Travertine','✦',
            'Architectural Stone','✦','Custom Fabrication','✦'].map((t,i) => (
            <span key={i} style={{
              fontFamily: t === '✦' ? 'serif' : 'var(--font-body)',
              fontSize: t === '✦' ? '0.7rem' : '0.72rem',
              letterSpacing: t === '✦' ? '0' : '0.22em',
              textTransform: 'uppercase',
              color: t === '✦' ? 'var(--gold)' : 'rgba(248,248,248,0.45)',
              whiteSpace: 'nowrap',
            }}>{t}</span>
          ))}
        </div>
      </div>
    </section>
  )
}

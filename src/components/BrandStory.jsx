import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function BrandStory() {
  const ref = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.bs-img',
        { scale: 1.12, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1.6, ease: 'power4.out',
          scrollTrigger: { trigger: ref.current, start: 'top 72%', toggleActions: 'play none none reset' } }
      )
      gsap.fromTo('.bs-text > *',
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: 'power3.out', stagger: 0.14,
          scrollTrigger: { trigger: ref.current, start: 'top 65%', toggleActions: 'play none none reset' } }
      )
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <section
      id="about"
      ref={ref}
      style={{
        background: 'var(--bg-light)',
        padding: 'clamp(5rem,10vw,9rem) 0',
        overflow: 'hidden',
      }}
    >
      <div style={{
        maxWidth: '1480px', margin: '0 auto',
        padding: '0 clamp(1.5rem,6vw,6rem)',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%,480px), 1fr))',
        gap: 'clamp(3rem,6vw,6rem)',
        alignItems: 'center',
      }}>
        {/* Image */}
        <div style={{ position: 'relative' }}>
          <div className="bs-img" style={{
            position: 'relative', aspectRatio: '4/5', overflow: 'hidden',
          }}>
            <img
              src="/stone2.png"
              alt="Stone craftsmanship"
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block',
                filter: 'brightness(0.95) saturate(0.9)' }}
            />
            <div className="stone-placeholder-light" style={{
              position: 'absolute', inset: 0, opacity: 0,
            }} />
          </div>
          {/* Accent frame */}
          <div style={{
            position: 'absolute', bottom: '-1.5rem', right: '-1.5rem',
            width: '55%', height: '55%',
            border: '1px solid rgba(200,169,126,0.25)',
            zIndex: -1,
            pointerEvents: 'none',
          }} />
          {/* Year badge */}
          <div className="year-badge" style={{
            position: 'absolute', top: '2rem', left: '-1rem',
            background: 'var(--stone-black)',
            padding: '1.4rem 1.8rem',
            display: 'flex', flexDirection: 'column', gap: '4px',
          }}>
            <span style={{ fontFamily: 'var(--font-display)', fontSize: '2.6rem', fontWeight: 300,
              color: 'var(--gold)', lineHeight: 1 }}>15+</span>
            <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.6rem', letterSpacing: '0.3em',
              color: 'rgba(248,248,248,0.6)', textTransform: 'uppercase' }}>Years Excellence</span>
          </div>
        </div>

        {/* Text */}
        <div className="bs-text" style={{ display: 'flex', flexDirection: 'column', gap: '2rem', position: 'relative' }}>
          <span className="section-ghost" style={{ top: '-4rem', right: '-2rem', WebkitTextStroke: '1px rgba(78,58,45,0.1)' }} aria-hidden="true">01</span>
          <span className="eyebrow eyebrow-tick" style={{ color: 'var(--earth-brown)' }}>Our Story</span>

          <h2 className="heading-1" style={{ color: 'var(--text-dark)' }}>
            Where Exceptional<br />
            Materials Meet<br />
            <em style={{ color: 'var(--earth-brown)', fontStyle: 'italic' }}>Masterful Craft</em>
          </h2>

          <div style={{ width: '60px', height: '1px', background: 'var(--gold-dark)' }} />

          <p className="body-lg" style={{ color: 'rgba(26,26,26,0.65)' }}>
            We believe exceptional spaces begin with exceptional materials. Through careful sourcing
            from the world's finest quarries, expert craftsmanship, and an uncompromising
            commitment to quality, we transform natural stone into enduring architectural statements.
          </p>

          <p className="body-lg" style={{ color: 'rgba(26,26,26,0.65)' }}>
            From rare Italian marbles and Brazilian granites to exotic quartzites and onyx,
            every slab in our collection is selected by hand — chosen not just for its visual
            beauty, but for its structural integrity and the story it will tell in your space.
          </p>

          <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', paddingTop: '0.5rem' }}>
            {['Direct Quarry Sourcing', 'Custom Fabrication', '500+ Variants'].map(tag => (
              <div key={tag} style={{
                display: 'flex', alignItems: 'center', gap: '0.6rem',
              }}>
                <span style={{ width: '6px', height: '6px', background: 'var(--gold-dark)', borderRadius: '50%', flexShrink: 0 }} />
                <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.8rem',
                  color: 'var(--text-dark)', letterSpacing: '0.05em' }}>
                  {tag}
                </span>
              </div>
            ))}
          </div>

          <a href="#collections" className="btn-primary" style={{
            alignSelf: 'flex-start', marginTop: '0.5rem',
            background: 'var(--stone-black)', color: 'var(--gold)',
          }}
            onMouseEnter={e => { e.currentTarget.style.background = 'var(--earth-brown)'; e.currentTarget.style.color = '#fff' }}
            onMouseLeave={e => { e.currentTarget.style.background = 'var(--stone-black)'; e.currentTarget.style.color = 'var(--gold)' }}
          >
            Explore Our Materials
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M1 7h12M8 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}

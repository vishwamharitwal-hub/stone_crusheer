import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const PILLARS = [
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <rect x="4" y="4" width="10" height="10" stroke="currentColor" strokeWidth="1.5"/>
        <rect x="18" y="4" width="10" height="10" stroke="currentColor" strokeWidth="1.5"/>
        <rect x="4" y="18" width="10" height="10" stroke="currentColor" strokeWidth="1.5"/>
        <rect x="18" y="18" width="10" height="10" stroke="currentColor" strokeWidth="1.5"/>
      </svg>
    ),
    title: 'Exceptional Materials',
    desc: 'Carefully sourced marble, granite, quartzite and natural stone selected for beauty, durability and character. Each slab handpicked from the world\'s premier quarries.',
    stat: '500+ Variants',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <circle cx="16" cy="16" r="11" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M10 16l4 4 8-8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Precision Craftsmanship',
    desc: 'Advanced CNC cutting, waterjet fabrication and hand-finishing processes delivering tolerances to 0.1mm. Every edge, every surface treated with meticulous attention.',
    stat: '0.1mm Tolerance',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <polygon points="16,4 28,26 4,26" stroke="currentColor" strokeWidth="1.5" fill="none"/>
        <line x1="16" y1="12" x2="16" y2="20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="16" cy="22.5" r="1" fill="currentColor"/>
      </svg>
    ),
    title: 'Architectural Excellence',
    desc: 'Materials trusted by leading architects, interior designers and luxury developers worldwide. From bespoke residential projects to landmark commercial installations.',
    stat: '500+ Projects',
  },
]

export default function CorePillars() {
  const ref = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.pillar-h',
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: 'power3.out',
          scrollTrigger: { trigger: ref.current, start: 'top 72%', toggleActions: 'play none none reset' } }
      )
      gsap.fromTo('.pillar-item',
        { y: 60, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: 'power3.out', stagger: 0.15,
          scrollTrigger: { trigger: ref.current, start: 'top 65%', toggleActions: 'play none none reset' } }
      )
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={ref}
      style={{
        background: 'var(--bg-dark)',
        padding: 'clamp(5rem,10vw,9rem) clamp(1.5rem,6vw,6rem)',
      }}
    >
      <div style={{ maxWidth: '1480px', margin: '0 auto' }}>
        {/* Header */}
        <div className="pillar-h" style={{
          display: 'grid', gridTemplateColumns: '1fr 1fr',
          gap: '3rem', marginBottom: 'clamp(3.5rem,6vw,5rem)',
          alignItems: 'flex-end',
        }}>
          <div style={{ position: 'relative' }}>
            <span className="section-ghost" style={{ top: '-5rem', left: '-2rem' }} aria-hidden="true">02</span>
            <span className="eyebrow eyebrow-tick" style={{ marginBottom: '1.2rem' }}>Our Principles</span>
            <h2 className="display-2" style={{ color: 'var(--text-light)', position: 'relative' }}>
              Built on Three<br />
              <em style={{ color: 'var(--gold)', fontStyle: 'italic' }}>Core Pillars</em>
            </h2>
          </div>
          <p className="body-lg" style={{
            color: 'var(--text-muted)', alignSelf: 'flex-end',
            paddingBottom: '0.3rem', maxWidth: '420px', justifySelf: 'end',
          }}>
            Every decision we make is guided by our unwavering commitment
            to material excellence, technical mastery, and architectural integrity.
          </p>
        </div>

        <div className="gold-line-full" style={{ marginBottom: 'clamp(3.5rem,6vw,5rem)' }} />

        {/* Pillars grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%,300px),1fr))',
          gap: '1px',
          background: 'var(--border-light)',
        }}>
          {PILLARS.map((p, i) => (
            <div
              key={i}
              className="pillar-card pillar-item"
              style={{
                background: 'var(--bg-dark)',
                padding: 'clamp(2.5rem,4vw,3.5rem) clamp(2rem,3vw,3rem)',
                display: 'flex', flexDirection: 'column', gap: '2rem',
              }}
            >
              <div style={{ color: 'var(--gold)', opacity: 0.8 }}>{p.icon}</div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <span style={{
                  fontFamily: 'var(--font-body)', fontSize: '0.62rem',
                  letterSpacing: '0.28em', textTransform: 'uppercase',
                  color: 'rgba(200,169,126,0.5)',
                }}>
                  0{i + 1}
                </span>
                <h3 className="heading-2" style={{ color: 'var(--text-light)' }}>{p.title}</h3>
              </div>

              <p className="body-sm" style={{ color: 'var(--text-muted)', flex: 1 }}>{p.desc}</p>

              <div style={{
                borderTop: '1px solid rgba(200,169,126,0.12)',
                paddingTop: '1.5rem',
                display: 'flex', justifyContent: 'space-between', alignItems: 'center',
              }}>
                <span style={{
                  fontFamily: 'var(--font-display)', fontSize: '1.1rem',
                  fontWeight: 400, color: 'var(--gold)',
                }}>
                  {p.stat}
                </span>
                <span style={{
                  display: 'flex', alignItems: 'center', gap: '0.4rem',
                  fontSize: '0.65rem', letterSpacing: '0.2em',
                  textTransform: 'uppercase', color: 'rgba(200,169,126,0.5)',
                  cursor: 'none',
                }}>
                  Learn more <span>→</span>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

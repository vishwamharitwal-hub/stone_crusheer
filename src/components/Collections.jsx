import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const COLLECTIONS = [
  { img: '/stone1.png', name: 'Calacatta Oro', cat: 'Italian Marble', origin: 'Carrara, Italy',
    desc: 'The pinnacle of white marble — golden veining on a pristine white canvas.' },
  { img: '/stone3.png', name: 'Arabescato Verde', cat: 'Exotic Marble', origin: 'Tuscany, Italy',
    desc: 'Dramatic green and white veining for bold, architectural statements.' },
  { img: '/stone4.png', name: 'Absolute Black', cat: 'Premium Granite', origin: 'Bangalore, India',
    desc: 'The purest black granite — flawless, timeless, uncompromising.' },
  { img: '/stone2.png', name: 'Fantasy Brown', cat: 'Quartzite Collection', origin: 'Rajasthan, India',
    desc: 'Fluid movement of earth tones — quartzite with the beauty of marble.' },
]

export default function Collections() {
  const ref = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.coll-header > *',
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: 'power3.out', stagger: 0.12,
          scrollTrigger: { trigger: ref.current, start: 'top 72%', toggleActions: 'play none none reset' } }
      )
      gsap.fromTo('.coll-card',
        { y: 70, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.1, ease: 'power4.out', stagger: 0.12,
          scrollTrigger: { trigger: ref.current, start: 'top 60%', toggleActions: 'play none none reset' } }
      )
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <section
      id="collections"
      ref={ref}
      style={{
        background: 'var(--bg-light)',
        padding: 'clamp(5rem,10vw,9rem) clamp(1.5rem,6vw,6rem)',
      }}
    >
      <div style={{ maxWidth: '1480px', margin: '0 auto' }}>
        {/* Header */}
        <div className="coll-header" style={{
          display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end',
          flexWrap: 'wrap', gap: '2rem',
          marginBottom: 'clamp(3rem,5vw,5rem)',
        }}>
          <div style={{ position: 'relative' }}>
            <span className="section-ghost" style={{ top: '-5rem', left: '-2rem', WebkitTextStroke: '1px rgba(78,58,45,0.1)' }} aria-hidden="true">03</span>
            <span className="eyebrow eyebrow-tick" style={{ color: 'var(--earth-brown)', marginBottom: '1.2rem' }}>
              Featured Collections
            </span>
            <h2 className="display-2" style={{ color: 'var(--text-dark)', position: 'relative' }}>
              Materials of<br />
              <em style={{ color: 'var(--earth-brown)', fontStyle: 'italic' }}>Distinction</em>
            </h2>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'flex-end' }}>
            <p className="body-sm" style={{ color: 'rgba(26,26,26,0.55)', maxWidth: '320px', textAlign: 'right' }}>
              Each collection represents a unique geological story — sourced from
              the world's finest quarries, finished to architectural precision.
            </p>
            <a href="#collections" style={{
              fontFamily: 'var(--font-body)', fontSize: '0.72rem',
              letterSpacing: '0.2em', textTransform: 'uppercase',
              color: 'var(--earth-brown)', textDecoration: 'none',
              display: 'flex', alignItems: 'center', gap: '0.5rem',
              transition: 'gap 0.3s ease',
            }}
              onMouseEnter={e => e.currentTarget.style.gap = '0.9rem'}
              onMouseLeave={e => e.currentTarget.style.gap = '0.5rem'}
            >
              View All Collections →
            </a>
          </div>
        </div>

        {/* Cards grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%,260px),1fr))',
          gap: '1.5px',
          background: 'rgba(200,169,126,0.1)',
        }}>
          {COLLECTIONS.map((c, i) => (
            <div
              key={i}
              className="collection-card coll-card"
              style={{ aspectRatio: '3/4', background: 'var(--stone-black)' }}
            >
              <img
                src={c.img}
                alt={c.name}
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                loading="lazy"
              />

              {/* Always-visible info strip */}
              <div style={{
                position: 'absolute', bottom: 0, left: 0, right: 0,
                padding: '1.5rem',
                background: 'linear-gradient(to top, rgba(18,18,18,0.9) 0%, transparent 100%)',
                display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end',
              }}>
                <div>
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.62rem',
                    letterSpacing: '0.25em', textTransform: 'uppercase',
                    color: 'var(--gold)', marginBottom: '4px' }}>{c.cat}</p>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.3rem',
                    fontWeight: 400, color: 'var(--text-light)', lineHeight: 1.2 }}>{c.name}</h3>
                </div>
                <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.6rem',
                  letterSpacing: '0.2em', color: 'rgba(248,248,248,0.5)', textTransform: 'uppercase' }}>
                  {c.origin}
                </span>
              </div>

              {/* Hover overlay */}
              <div className="collection-card-overlay">
                <p className="body-sm" style={{ color: 'rgba(248,248,248,0.75)', marginBottom: '1.2rem' }}>
                  {c.desc}
                </p>
                <a href="#contact" style={{
                  fontFamily: 'var(--font-body)', fontSize: '0.68rem',
                  letterSpacing: '0.22em', textTransform: 'uppercase',
                  color: 'var(--gold)', textDecoration: 'none',
                  display: 'flex', alignItems: 'center', gap: '0.5rem',
                }}>
                  View Collection →
                </a>
              </div>

              {/* Number tag */}
              <div style={{
                position: 'absolute', top: '1.2rem', right: '1.2rem',
                fontFamily: 'var(--font-display)', fontSize: '0.85rem',
                fontStyle: 'italic', color: 'rgba(200,169,126,0.5)',
              }}>
                {String(i + 1).padStart(2, '0')}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div style={{
          display: 'flex', justifyContent: 'center', marginTop: '3.5rem',
        }}>
          <a href="#contact" className="btn-primary" style={{
            background: 'var(--stone-black)', color: 'var(--gold)',
          }}
            onMouseEnter={e => { e.currentTarget.style.background = 'var(--earth-brown)'; e.currentTarget.style.color = '#fff' }}
            onMouseLeave={e => { e.currentTarget.style.background = 'var(--stone-black)'; e.currentTarget.style.color = 'var(--gold)' }}
          >
            Request Full Catalogue
          </a>
        </div>
      </div>
    </section>
  )
}

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const PROJECTS = [
  { img: '/stone2.png', title: 'The Seraphine Residences',    cat: 'Luxury Residential', loc: 'Mumbai, India',  span: '2/8' },
  { img: '/stone3.png', title: 'Azure Palace Hotel',          cat: 'Hospitality',         loc: 'Dubai, UAE',     span: '8/13' },
  { img: '/stone1.png', title: 'Meridian Corporate HQ',       cat: 'Commercial',          loc: 'Bangalore',      span: '2/6' },
  { img: '/stone4.png', title: 'Palazzo Verde Estates',       cat: 'Luxury Residential',  loc: 'Goa, India',     span: '6/11' },
  { img: '/stone3.png', title: 'The Oberoi Grand Renovation', cat: 'Hospitality',         loc: 'Kolkata, India', span: '11/13' },
]

// Manual masonry positions: [col-start, col-end, row, aspectRatio]
const LAYOUT = [
  { colStart: 1, colEnd: 7,  rowStart: 1, rowEnd: 2, ratio: '16/9' },
  { colStart: 7, colEnd: 13, rowStart: 1, rowEnd: 3, ratio: '3/4'  },
  { colStart: 1, colEnd: 5,  rowStart: 2, rowEnd: 4, ratio: '4/5'  },
  { colStart: 5, colEnd: 10, rowStart: 3, rowEnd: 4, ratio: '16/9' },
  { colStart: 10, colEnd: 13, rowStart: 3, rowEnd: 4, ratio: '4/3' },
]

export default function ProjectGallery() {
  const ref = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.gallery-header > *',
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: 'power3.out', stagger: 0.12,
          scrollTrigger: { trigger: ref.current, start: 'top 72%', toggleActions: 'play none none reset' } }
      )
      gsap.fromTo('.gallery-item',
        { scale: 0.96, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1.1, ease: 'power3.out', stagger: 0.1,
          scrollTrigger: { trigger: '.gallery-grid-wrap', start: 'top 70%', toggleActions: 'play none none reset' } }
      )
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <section
      id="projects"
      ref={ref}
      style={{
        background: 'var(--bg-dark)',
        padding: 'clamp(5rem,10vw,9rem) clamp(1.5rem,6vw,6rem)',
      }}
    >
      <div style={{ maxWidth: '1480px', margin: '0 auto' }}>
        {/* Header */}
        <div className="gallery-header" style={{ marginBottom: 'clamp(3rem,5vw,5rem)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '2rem' }}>
            <div style={{ position: 'relative' }}>
              <span className="section-ghost" style={{ top: '-5rem', left: '-2rem' }} aria-hidden="true">04</span>
              <span className="eyebrow eyebrow-tick" style={{ marginBottom: '1.2rem' }}>Selected Projects</span>
              <h2 className="display-2" style={{ color: 'var(--text-light)', position: 'relative' }}>
                Materials That Shape<br />
                <em style={{ color: 'var(--gold)', fontStyle: 'italic' }}>Extraordinary Spaces</em>
              </h2>
            </div>
            <div style={{
              background: 'rgba(200,169,126,0.06)', border: '1px solid var(--border-light)',
              padding: '1.5rem 2rem', maxWidth: '260px', alignSelf: 'flex-end',
            }}>
              <p className="body-sm" style={{ color: 'var(--text-muted)' }}>
                From private residences to landmark hotels — our stone shapes spaces
                that endure across generations.
              </p>
            </div>
          </div>
        </div>

        {/* Masonry-style grid */}
        <div className="gallery-grid-wrap" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(12, 1fr)',
          gap: '0.75rem',
        }}>
          {PROJECTS.slice(0, 5).map((p, i) => {
            const l = LAYOUT[i]
            return (
              <div
                key={i}
                className="gallery-item"
                style={{
                  gridColumn: `${l.colStart} / ${l.colEnd}`,
                  position: 'relative',
                  overflow: 'hidden',
                  aspectRatio: l.ratio,
                  background: 'var(--stone-black)',
                  cursor: 'none',
                }}
              >
                <img
                  src={p.img}
                  alt={p.title}
                  style={{
                    width: '100%', height: '100%', objectFit: 'cover', display: 'block',
                    transition: 'transform 0.8s var(--ease-luxury)',
                  }}
                  loading="lazy"
                  onMouseEnter={e => e.target.style.transform = 'scale(1.05)'}
                  onMouseLeave={e => e.target.style.transform = 'scale(1)'}
                />

                {/* Gradient overlay */}
                <div style={{
                  position: 'absolute', inset: 0,
                  background: 'linear-gradient(to top, rgba(18,18,18,0.8) 0%, rgba(18,18,18,0.1) 55%, transparent 100%)',
                  pointerEvents: 'none',
                }} />

                {/* Label */}
                <div style={{
                  position: 'absolute', bottom: '1.2rem', left: '1.2rem', right: '1.2rem',
                  pointerEvents: 'none',
                }}>
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.6rem',
                    letterSpacing: '0.25em', textTransform: 'uppercase',
                    color: 'var(--gold)', marginBottom: '4px' }}>{p.cat} · {p.loc}</p>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1rem,1.8vw,1.3rem)',
                    fontWeight: 400, color: 'var(--text-light)', lineHeight: 1.2 }}>{p.title}</h3>
                </div>

                {/* Corner number */}
                <span style={{
                  position: 'absolute', top: '1rem', right: '1rem',
                  fontFamily: 'var(--font-display)', fontSize: '0.85rem',
                  fontStyle: 'italic', color: 'rgba(200,169,126,0.45)',
                }}>
                  {String(i + 1).padStart(2, '0')}
                </span>
              </div>
            )
          })}
        </div>

        {/* Bottom row: metrics */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%,180px),1fr))',
          gap: '1px', background: 'var(--border-light)',
          marginTop: '0.75rem',
        }}>
          {[
            { label: 'Luxury Residences', val: '220+' },
            { label: 'Hotel Projects',    val: '85+' },
            { label: 'Commercial',        val: '195+' },
            { label: 'Countries',         val: '12' },
          ].map((m, i) => (
            <div key={i} style={{
              background: 'rgba(255,255,255,0.015)',
              padding: '2rem',
              display: 'flex', flexDirection: 'column', gap: '0.4rem',
            }}>
              <span style={{ fontFamily: 'var(--font-display)', fontSize: '2.4rem',
                fontWeight: 300, color: 'var(--gold)', lineHeight: 1 }}>{m.val}</span>
              <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.7rem',
                letterSpacing: '0.2em', textTransform: 'uppercase',
                color: 'rgba(248,248,248,0.4)' }}>{m.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

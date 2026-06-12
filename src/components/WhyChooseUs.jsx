import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const STATS = [
  { num: 500, suffix: '+', label: 'Projects Delivered',     sub: 'Across residential, commercial & hospitality' },
  { num: 100, suffix: '+', label: 'Stone Variants',         sub: 'Curated from 18 countries worldwide' },
  { num: 15,  suffix: '+', label: 'Years Experience',       sub: 'Leading the industry since 2009' },
  { num: 98,  suffix: '%', label: 'Client Satisfaction',    sub: 'Measured across every completed project' },
]

const FEATURES = [
  { title: 'Direct Quarry Access',     desc: 'We bypass middlemen — working directly with quarries for best material and pricing.' },
  { title: 'Quality Assurance',        desc: 'Every slab is inspected for consistency, veining, structural integrity before dispatch.' },
  { title: 'Custom Fabrication',       desc: 'Bespoke cutting, edge profiles, surface finishes — engineered to your exact specifications.' },
  { title: 'Reliable Delivery',        desc: 'Nationwide delivery network with climate-controlled transport for fragile stone.' },
  { title: 'Architectural Support',    desc: 'In-house team of material consultants assisting architects and designers.' },
  { title: 'Premium Material Range',   desc: 'From affordable granites to rare Calacatta Oro — a range for every premium project.' },
]

function CountUp({ target, suffix, active }) {
  const [val, setVal] = useState(0)
  const started = useRef(false)

  useEffect(() => {
    if (!active || started.current) return
    started.current = true
    let start, id
    const step = (ts) => {
      if (!start) start = ts
      const p = Math.min((ts - start) / 1800, 1)
      const e = 1 - Math.pow(1 - p, 4)
      setVal(Math.floor(e * target))
      if (p < 1) { id = requestAnimationFrame(step) } else setVal(target)
    }
    id = requestAnimationFrame(step)
    return () => cancelAnimationFrame(id)
  }, [active, target])

  return <>{val}{suffix}</>
}

export default function WhyChooseUs() {
  const ref    = useRef(null)
  const [inV, setInV] = useState(false)

  useEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: ref.current, start: 'top 70%',
        onEnter: () => setInV(true),
      })
      gsap.fromTo('.why-header > *',
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: 'power3.out', stagger: 0.12,
          scrollTrigger: { trigger: ref.current, start: 'top 72%', toggleActions: 'play none none reset' } }
      )
      gsap.fromTo('.why-stat',
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: 'power3.out', stagger: 0.1,
          scrollTrigger: { trigger: '.why-stats', start: 'top 72%', toggleActions: 'play none none reset' } }
      )
      gsap.fromTo('.why-feat',
        { x: -30, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.9, ease: 'power3.out', stagger: 0.08,
          scrollTrigger: { trigger: '.why-feats', start: 'top 68%', toggleActions: 'play none none reset' } }
      )
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <section
      id="why"
      ref={ref}
      style={{
        background: 'var(--bg-light)',
        padding: 'clamp(5rem,10vw,9rem) clamp(1.5rem,6vw,6rem)',
      }}
    >
      <div style={{ maxWidth: '1480px', margin: '0 auto' }}>
        {/* Header */}
        <div className="why-header" style={{
          textAlign: 'center', marginBottom: 'clamp(3.5rem,6vw,5.5rem)',
          maxWidth: '680px', margin: '0 auto clamp(3.5rem,6vw,5.5rem)',
        }}>
          <span className="eyebrow" style={{ color: 'var(--earth-brown)', display: 'block', marginBottom: '1.2rem', letterSpacing: '0.32em' }}>
            ✦ &nbsp;Why DSS Stone World&nbsp; ✦
          </span>
          <h2 className="display-2" style={{ color: 'var(--text-dark)', marginBottom: '1.5rem' }}>
            The Standard Others<br />
            <em style={{ color: 'var(--earth-brown)', fontStyle: 'italic' }}>Aspire To</em>
          </h2>
          <p className="body-lg" style={{ color: 'rgba(26,26,26,0.6)' }}>
            For 15 years, architects, designers and luxury developers have chosen DSS Stone World
            for one reason — we never compromise. On material, on craft, on service.
          </p>
        </div>

        {/* Stats */}
        <div className="why-stats" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%,200px),1fr))',
          gap: '1px', background: 'rgba(200,169,126,0.15)',
          marginBottom: 'clamp(3.5rem,6vw,5rem)',
        }}>
          {STATS.map((s, i) => (
            <div key={i} className="why-stat" style={{
              background: 'var(--bg-light)',
              padding: 'clamp(2rem,3.5vw,3rem) clamp(1.5rem,2.5vw,2.5rem)',
              display: 'flex', flexDirection: 'column', gap: '0.6rem',
              position: 'relative', overflow: 'hidden',
            }}>
              {/* Ghost number background */}
              <span style={{
                position: 'absolute', top: '-0.5rem', right: '-0.5rem',
                fontFamily: 'var(--font-display)', fontSize: '7rem', fontWeight: 300,
                color: 'rgba(200,169,126,0.07)', lineHeight: 1, pointerEvents: 'none',
                userSelect: 'none',
              }}>
                {String(i + 1).padStart(2, '0')}
              </span>
              <span className="stat-num">
                <CountUp target={s.num} suffix={s.suffix} active={inV} />
              </span>
              <div style={{ width: '40px', height: '2px', background: 'var(--gold-dark)' }} />
              <span style={{ fontFamily: 'var(--font-body)', fontWeight: 500,
                fontSize: '0.88rem', color: 'var(--text-dark)' }}>
                {s.label}
              </span>
              <span className="body-sm" style={{ color: 'rgba(26,26,26,0.5)' }}>
                {s.sub}
              </span>
            </div>
          ))}
        </div>

        {/* Features grid */}
        <div className="why-feats" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%,300px),1fr))',
          gap: '1.5px', background: 'rgba(200,169,126,0.1)',
        }}>
          {FEATURES.map((f, i) => (
            <div key={i} className="why-feat" style={{
              background: 'var(--bg-light)',
              padding: '2rem 2.2rem',
              display: 'flex', flexDirection: 'column', gap: '0.8rem',
              borderBottom: 'none',
              transition: 'background 0.3s ease',
            }}
              onMouseEnter={e => e.currentTarget.style.background = 'rgba(200,169,126,0.06)'}
              onMouseLeave={e => e.currentTarget.style.background = 'var(--bg-light)'}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                <span style={{ width: '8px', height: '8px',
                  background: 'var(--gold-dark)', borderRadius: '50%', flexShrink: 0 }} />
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.15rem',
                  fontWeight: 400, color: 'var(--text-dark)' }}>{f.title}</h3>
              </div>
              <p className="body-sm" style={{ color: 'rgba(26,26,26,0.58)', paddingLeft: '1.6rem' }}>
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function ConsultationCTA() {
  const ref = useRef(null)
  const [form, setForm] = useState({ name: '', email: '', phone: '', type: '', message: '' })
  const [sent, setSent] = useState(false)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.cta-left > *',
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: 'power3.out', stagger: 0.12,
          scrollTrigger: { trigger: ref.current, start: 'top 68%', toggleActions: 'play none none reset' } }
      )
      gsap.fromTo('.cta-form',
        { x: 50, opacity: 0 },
        { x: 0, opacity: 1, duration: 1.1, ease: 'power4.out',
          scrollTrigger: { trigger: ref.current, start: 'top 65%', toggleActions: 'play none none reset' } }
      )
    }, ref)
    return () => ctx.revert()
  }, [])

  const handle = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const submit = (e) => {
    e.preventDefault()
    setSent(true)
  }

  const fieldStyle = {
    width: '100%', background: 'transparent', border: 'none',
    borderBottom: '1px solid rgba(200,169,126,0.22)',
    padding: '1rem 0', color: 'var(--text-light)',
    fontFamily: 'var(--font-body)', fontSize: '0.95rem', fontWeight: 300,
    outline: 'none', transition: 'border-color 0.3s ease', cursor: 'none',
  }

  return (
    <section
      id="contact"
      ref={ref}
      style={{
        position: 'relative', overflow: 'hidden',
        background: 'var(--stone-black)',
        padding: 'clamp(5rem,10vw,9rem) clamp(1.5rem,6vw,6rem)',
      }}
    >
      {/* Background image with deep overlay */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
        <img src="/stone4.png" alt="" aria-hidden="true"
          style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.15,
            filter: 'grayscale(40%) brightness(0.6)' }} />
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(135deg, rgba(18,18,18,0.97) 0%, rgba(23,23,23,0.9) 50%, rgba(18,18,18,0.97) 100%)',
        }} />
      </div>

      <div style={{
        position: 'relative', zIndex: 1,
        maxWidth: '1480px', margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%,420px),1fr))',
        gap: 'clamp(4rem,7vw,8rem)',
        alignItems: 'flex-start',
      }}>
        {/* Left content */}
        <div className="cta-left" style={{ display: 'flex', flexDirection: 'column', gap: '2.2rem' }}>
          <span className="eyebrow eyebrow-tick" style={{ color: 'var(--gold)' }}>Begin Your Project</span>

          <h2 className="display-2" style={{ color: 'var(--text-light)' }}>
            Let's Build<br />
            Something<br />
            <em style={{ color: 'var(--gold)', fontStyle: 'italic' }}>Timeless</em>
          </h2>

          <div style={{ width: '60px', height: '1px', background: 'var(--gold-dark)' }} />

          <p className="body-lg" style={{ color: 'var(--text-muted)', maxWidth: '420px' }}>
            Connect with our team to discuss your next architectural or interior
            project. We take on a select number of projects each year to ensure
            every client receives the full depth of our expertise.
          </p>

          {/* Contact details */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.4rem', paddingTop: '0.5rem' }}>
            {[
              { label: 'Email',    val: 'info@dssstone.com' },
              { label: 'Phone',    val: '+91 98765 43210' },
              { label: 'Showroom', val: 'Lower Parel, Mumbai — 400013' },
              { label: 'Hours',    val: 'Mon–Sat · 9AM to 7PM IST' },
            ].map(item => (
              <div key={item.label} style={{
                display: 'flex', gap: '1.5rem', alignItems: 'baseline',
                borderBottom: '1px solid rgba(200,169,126,0.1)',
                paddingBottom: '1.4rem',
              }}>
                <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.62rem',
                  letterSpacing: '0.28em', textTransform: 'uppercase',
                  color: 'var(--gold)', minWidth: '80px' }}>{item.label}</span>
                <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.92rem',
                  fontWeight: 300, color: 'rgba(248,248,248,0.7)' }}>{item.val}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Form */}
        {!sent ? (
          <form className="cta-form" onSubmit={submit}
            style={{
              display: 'flex', flexDirection: 'column', gap: '0',
              background: 'rgba(255,255,255,0.025)',
              border: '1px solid rgba(200,169,126,0.12)',
              padding: 'clamp(2rem,4vw,3rem)',
            }}
          >
            <p style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem',
              fontWeight: 300, color: 'var(--text-light)',
              marginBottom: '2rem', letterSpacing: '0.02em' }}>
              Request a Consultation
            </p>

            <div className="cta-form-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0 2rem' }}>
              {[
                { name: 'name',  ph: 'Your Name *',  type: 'text', req: true },
                { name: 'email', ph: 'Email Address *', type: 'email', req: true },
              ].map(f => (
                <div key={f.name} style={{ marginBottom: '0.5rem' }}>
                  <input name={f.name} type={f.type} placeholder={f.ph} required={f.req}
                    value={form[f.name]} onChange={handle}
                    style={fieldStyle}
                    onFocus={e => e.target.style.borderBottomColor = 'var(--gold)'}
                    onBlur={e => e.target.style.borderBottomColor = 'rgba(200,169,126,0.22)'}
                  />
                </div>
              ))}
            </div>

            <div style={{ marginBottom: '0.5rem' }}>
              <input name="phone" type="tel" placeholder="Phone Number"
                value={form.phone} onChange={handle}
                style={fieldStyle}
                onFocus={e => e.target.style.borderBottomColor = 'var(--gold)'}
                onBlur={e => e.target.style.borderBottomColor = 'rgba(200,169,126,0.22)'}
              />
            </div>

            <div style={{ marginBottom: '0.5rem' }}>
              <select name="type" value={form.type} onChange={handle}
                style={{ ...fieldStyle, color: form.type ? 'var(--text-light)' : 'rgba(248,248,248,0.3)' }}
                onFocus={e => e.target.style.borderBottomColor = 'var(--gold)'}
                onBlur={e => e.target.style.borderBottomColor = 'rgba(200,169,126,0.22)'}
              >
                <option value="" disabled>Project Type</option>
                {['Luxury Residential', 'Hotel / Hospitality', 'Commercial Office', 'Retail Space', 'Other'].map(o => (
                  <option key={o} value={o}>{o}</option>
                ))}
              </select>
            </div>

            <div style={{ marginBottom: '2.5rem' }}>
              <textarea name="message" rows={4} placeholder="Describe your project requirements..."
                value={form.message} onChange={handle}
                style={{ ...fieldStyle, resize: 'none', display: 'block' }}
                onFocus={e => e.target.style.borderBottomColor = 'var(--gold)'}
                onBlur={e => e.target.style.borderBottomColor = 'rgba(200,169,126,0.22)'}
              />
            </div>

            <button type="submit" className="btn-gold-outline"
              style={{ alignSelf: 'flex-start' }}>
              Request Consultation
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M1 7h12M8 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>

            <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.7rem',
              color: 'rgba(248,248,248,0.3)', marginTop: '1.2rem' }}>
              We respond within 24 hours. All information kept strictly confidential.
            </p>
          </form>
        ) : (
          <div className="cta-form" style={{
            background: 'rgba(200,169,126,0.06)',
            border: '1px solid rgba(200,169,126,0.25)',
            padding: 'clamp(3rem,5vw,4rem)',
            display: 'flex', flexDirection: 'column', gap: '1.5rem',
            justifyContent: 'center', alignItems: 'center', textAlign: 'center',
            minHeight: '400px',
          }}>
            <div style={{ width: '56px', height: '56px', borderRadius: '50%',
              border: '1px solid var(--gold)', display: 'flex', alignItems: 'center',
              justifyContent: 'center' }}>
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                <path d="M4 11l5 5 9-9" stroke="var(--gold)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.8rem',
              fontWeight: 300, color: 'var(--text-light)' }}>Thank You</h3>
            <p className="body-sm" style={{ color: 'var(--text-muted)', maxWidth: '320px' }}>
              Your consultation request has been received. Our team will contact you within 24 hours.
            </p>
          </div>
        )}
      </div>
    </section>
  )
}

const NAV_COLS = [
  {
    heading: 'Collections',
    links: ['Italian Marble', 'Luxury Granite', 'Quartzite', 'Onyx & Travertine', 'Custom Stone'],
  },
  {
    heading: 'Company',
    links: ['Our Story', 'Craftsmanship', 'Sustainability', 'Careers', 'Press'],
  },
  {
    heading: 'Services',
    links: ['Material Consultation', 'Custom Fabrication', 'Project Support', 'Trade Programme', 'Delivery'],
  },
]

export default function Footer() {
  return (
    <footer style={{
      background: 'var(--stone-black)',
      borderTop: '1px solid rgba(200,169,126,0.1)',
    }}>
      {/* Main footer body */}
      <div style={{
        maxWidth: '1480px', margin: '0 auto',
        padding: 'clamp(4rem,7vw,7rem) clamp(1.5rem,6vw,6rem)',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%,180px),1fr))',
        gap: 'clamp(3rem,5vw,5rem)',
      }}>
        {/* Brand column */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.8rem', gridColumn: 'span 1' }}>
          <div>
            <div style={{
              fontFamily: 'var(--font-display)', fontSize: '1.4rem',
              fontWeight: 400, letterSpacing: '0.08em',
              color: 'var(--text-light)', lineHeight: 1, marginBottom: '4px',
            }}>
              <span style={{ color: 'var(--gold)', fontWeight: 500 }}>DSS</span> Stone World
            </div>
            <div style={{
              fontFamily: 'var(--font-body)', fontSize: '0.55rem',
              letterSpacing: '0.4em', color: 'var(--gold)', textTransform: 'uppercase',
            }}>
              Premium Natural Stone
            </div>
          </div>
          <p className="body-sm" style={{ color: 'rgba(248,248,248,0.4)', lineHeight: 1.8 }}>
            Sourcing the world's finest natural stone and crafting it with architectural precision
            since 2009.
          </p>
          {/* Social */}
          <div style={{ display: 'flex', gap: '1rem' }}>
            {['IN', 'PI', 'HO', 'TW'].map(s => (
              <a key={s} href="#" style={{
                width: '36px', height: '36px',
                border: '1px solid rgba(200,169,126,0.2)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontFamily: 'var(--font-body)', fontSize: '0.55rem',
                letterSpacing: '0.1em', color: 'rgba(248,248,248,0.4)',
                textDecoration: 'none', transition: 'all 0.3s ease',
              }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--gold)'; e.currentTarget.style.color = 'var(--gold)' }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(200,169,126,0.2)'; e.currentTarget.style.color = 'rgba(248,248,248,0.4)' }}
              >{s}</a>
            ))}
          </div>
        </div>

        {/* Nav columns */}
        {NAV_COLS.map(col => (
          <div key={col.heading} style={{ display: 'flex', flexDirection: 'column', gap: '1.4rem' }}>
            <span style={{
              fontFamily: 'var(--font-body)', fontSize: '0.62rem',
              letterSpacing: '0.28em', textTransform: 'uppercase',
              color: 'var(--gold)',
            }}>{col.heading}</span>
            <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
              {col.links.map(l => (
                <a key={l} href="#" style={{
                  fontFamily: 'var(--font-body)', fontSize: '0.88rem',
                  fontWeight: 300, color: 'rgba(248,248,248,0.45)',
                  textDecoration: 'none', transition: 'color 0.3s ease',
                }}
                  onMouseEnter={e => e.target.style.color = 'var(--gold-light)'}
                  onMouseLeave={e => e.target.style.color = 'rgba(248,248,248,0.45)'}
                >{l}</a>
              ))}
            </nav>
          </div>
        ))}

        {/* Contact column */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.4rem' }}>
          <span style={{
            fontFamily: 'var(--font-body)', fontSize: '0.62rem',
            letterSpacing: '0.28em', textTransform: 'uppercase', color: 'var(--gold)',
          }}>Contact</span>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {[
              { label: 'Email', val: 'info@dssstone.com' },
              { label: 'Phone', val: '+91 98765 43210' },
              { label: 'Address', val: 'Lower Parel, Mumbai — 400013' },
            ].map(item => (
              <div key={item.label}>
                <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.6rem',
                  letterSpacing: '0.22em', textTransform: 'uppercase',
                  color: 'rgba(200,169,126,0.5)', marginBottom: '2px' }}>
                  {item.label}
                </div>
                <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.85rem',
                  fontWeight: 300, color: 'rgba(248,248,248,0.55)' }}>
                  {item.val}
                </div>
              </div>
            ))}
          </div>
          <a href="#contact" className="btn-gold-outline" style={{ marginTop: '0.5rem', padding: '0.75rem 1.6rem', fontSize: '0.65rem' }}>
            Visit Showroom
          </a>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{
        borderTop: '1px solid rgba(200,169,126,0.08)',
        padding: '1.5rem clamp(1.5rem,6vw,6rem)',
        maxWidth: '1480px', margin: '0 auto',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        flexWrap: 'wrap', gap: '1rem',
      }}>
        <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.72rem',
          color: 'rgba(248,248,248,0.25)', letterSpacing: '0.05em' }}>
          © 2026 DSS Stone World — Premium Natural Stone. All Rights Reserved.
        </p>
        <div style={{ display: 'flex', gap: '2rem' }}>
          {['Privacy Policy', 'Terms of Use', 'Sitemap'].map(l => (
            <a key={l} href="#" style={{
              fontFamily: 'var(--font-body)', fontSize: '0.7rem',
              color: 'rgba(248,248,248,0.25)', textDecoration: 'none',
              transition: 'color 0.3s ease', letterSpacing: '0.05em',
            }}
              onMouseEnter={e => e.target.style.color = 'rgba(200,169,126,0.6)'}
              onMouseLeave={e => e.target.style.color = 'rgba(248,248,248,0.25)'}
            >{l}</a>
          ))}
        </div>
      </div>
    </footer>
  )
}

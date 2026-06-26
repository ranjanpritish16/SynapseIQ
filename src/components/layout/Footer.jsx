import { footerLinks } from '../../data/navLinks'
import Container from './Container'

export default function Footer() {
  return (
    <footer className="bg-brand-ink border-t border-brand-deep/60 py-16">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 font-mono font-bold text-lg text-brand-mist mb-3">
              <svg width="24" height="24" viewBox="0 0 28 28" fill="none" aria-hidden="true">
                <rect width="28" height="28" rx="6" fill="#FFC801"/>
                <path d="M7 14h4l3-6 4 12 3-6h4" stroke="#172B36" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              SynapseIQ
            </div>
            <p className="text-sm text-brand-mist/50 font-sans leading-relaxed max-w-[200px]">
              AI-powered data automation for teams who move fast.
            </p>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([group, links]) => (
            <div key={group}>
              <p className="font-mono text-xs font-semibold tracking-widest uppercase text-brand-mist/40 mb-4">{group}</p>
              <nav aria-label={group}>
                <ul className="space-y-2 list-none m-0 p-0">
                  {links.map(l => (
                    <li key={l.label}>
                      <a href={l.href} className="text-sm text-brand-mist/60 hover:text-brand-mist transition-colors" style={{ transitionDuration: 'var(--duration-micro)' }}>
                        {l.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          ))}
        </div>

        <div className="border-t border-brand-deep/40 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-brand-mist/30 font-sans">© 2026 SynapseIQ, Inc. All rights reserved.</p>
          <div className="flex gap-6">
            {['Privacy', 'Terms', 'Security'].map(l => (
              <a key={l} href="#" className="text-xs text-brand-mist/30 hover:text-brand-mist/60 transition-colors" style={{ transitionDuration: 'var(--duration-micro)' }}>{l}</a>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  )
}

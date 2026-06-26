import { useState } from 'react'
import { navLinks } from '../../data/navLinks'
import Container from './Container'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 inset-x-0 z-50 border-b border-brand-deep/60 bg-brand-ink/80 backdrop-blur-md">
      <Container>
        <nav aria-label="Primary" className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" onClick={e => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }} className="flex items-center gap-2 font-mono font-bold text-lg text-brand-mist hover:text-brand-gold transition-colors" style={{ transitionDuration: 'var(--duration-micro)' }}>
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
              <rect width="28" height="28" rx="6" fill="#FFC801" />
              <path d="M7 14h4l3-6 4 12 3-6h4" stroke="#172B36" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            SynapseIQ
          </a>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-8 list-none m-0 p-0">
            {navLinks.map(link => (
              <li key={link.label}>
                <a href={link.href} className="font-sans text-sm text-brand-mist/70 hover:text-brand-mist transition-colors" style={{ transitionDuration: 'var(--duration-micro)' }}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <a href="#" className="font-sans text-sm text-brand-mist/70 hover:text-brand-mist transition-colors" style={{ transitionDuration: 'var(--duration-micro)' }}>Sign in</a>
            <a href="#pricing" className="btn-primary text-sm py-2">Get started</a>
          </div>

          {/* Hamburger */}
          <button
            className="md:hidden p-2 text-brand-mist"
            onClick={() => setOpen(o => !o)}
            aria-expanded={open}
            aria-label="Toggle menu"
          >
            {open ? (
              <XMarkIcon className="w-[22px] h-[22px]" />
            ) : (
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
                <path d="M3 6h16M3 11h16M3 16h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            )}
          </button>
        </nav>
      </Container>

      {/* Mobile slide-down menu */}
      <div
        className="md:hidden overflow-hidden transition-all"
        style={{
          maxHeight: open ? '320px' : '0',
          transitionDuration: 'var(--duration-structural)',
          transitionTimingFunction: 'var(--ease-structural)',
        }}
      >
        <div className="bg-brand-ink border-t border-brand-deep px-4 py-4 flex flex-col gap-4">
          {navLinks.map(link => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className="font-sans text-brand-mist/80 hover:text-brand-gold py-1"
            >
              {link.label}
            </a>
          ))}
          <a href="#pricing" onClick={() => setOpen(false)} className="btn-primary self-start mt-2">Get started</a>
        </div>
      </div>
    </header>
  )
}

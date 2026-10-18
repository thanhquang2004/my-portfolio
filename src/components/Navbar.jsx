import { useState, useEffect } from 'react'

const NAV_LINKS = [
  { label: 'About',         href: '#about' },
  { label: 'Case Studies',  href: '#case-studies' },
  { label: 'Skills',        href: '#skills' },
  { label: 'Experience',    href: '#experience' },
]

export default function Navbar() {
  const [scrolled, setScrolled]   = useState(false)
  const [menuOpen, setMenuOpen]   = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-slate-900/95 backdrop-blur-md border-b border-slate-800 shadow-lg shadow-black/30'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* ── Logo ── */}
          <a href="#" className="flex items-center gap-0.5 group" aria-label="Home">
            <span className="font-mono text-sm text-slate-500">~/</span>
            <span className="font-mono text-sm text-emerald-400 group-hover:text-emerald-300 transition-colors">
              marvin
            </span>
            <span className="font-mono text-sm text-slate-500">.io.vn</span>
            <span className="ml-1 inline-block w-1.5 h-4 bg-emerald-400 rounded-sm animate-blink" />
          </a>

          {/* ── Desktop links ── */}
          <div className="hidden md:flex items-center gap-7">
            {NAV_LINKS.map(({ label, href }) => (
              <a
                key={href}
                href={href}
                className="group font-mono text-sm text-slate-400 hover:text-emerald-400 transition-colors duration-200"
              >
                <span className="text-emerald-600 group-hover:text-emerald-400 transition-colors">#</span>
                {label}
              </a>
            ))}

            <a
              href="/Bui_Thanh_Quang-DevOps.pdf"
              download="Bui_Thanh_Quang-DevOps.pdf"
              className="flex items-center gap-1.5 px-4 py-1.5 border border-emerald-500/50 text-emerald-400 font-mono text-sm rounded-md hover:bg-emerald-500/10 hover:border-emerald-400 transition-all duration-200"
            >
              {/* Download icon */}
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Download CV
            </a>
          </div>

          {/* ── Mobile burger ── */}
          <button
            className="md:hidden p-2 text-slate-400 hover:text-white transition-colors"
            onClick={() => setMenuOpen(o => !o)}
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              {menuOpen
                ? <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                : <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              }
            </svg>
          </button>
        </div>

        {/* ── Mobile menu ── */}
        {menuOpen && (
          <div className="md:hidden border-t border-slate-800 py-3 space-y-0.5 bg-slate-900/98">
            {NAV_LINKS.map(({ label, href }) => (
              <a
                key={href}
                href={href}
                className="flex items-center gap-1.5 px-2 py-2.5 font-mono text-sm text-slate-400 hover:text-emerald-400 transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                <span className="text-emerald-600">#</span>{label}
              </a>
            ))}
            <a
              href="/Bui_Thanh_Quang-DevOps.pdf"
              download="Bui_Thanh_Quang-DevOps.pdf"
              className="flex items-center gap-1.5 px-2 py-2.5 font-mono text-sm text-emerald-400"
            >
              ↓ Download CV
            </a>
          </div>
        )}
      </div>
    </nav>
  )
}

import { useState, useEffect } from 'react'

const ROLES = [
  'Cloud & DevOps Engineer',
  'AWS Architect',
  'Infrastructure Automator',
  'CI/CD Pipeline Builder',
]

const CONTACTS = [
  {
    icon: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
      </svg>
    ),
    label: 'marvin.io.vn',
    href: 'https://marvin.io.vn',
    external: true,
  },
  {
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
    label: 'bui-thanh-quang72',
    href: 'https://www.linkedin.com/in/bui-thanh-quang72/',
    external: true,
  },
  {
    icon: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    label: 'thanhquangk22@gmail.com',
    href: 'mailto:thanhquangk22@gmail.com',
    external: false,
  },
  {
    icon: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    label: 'Ho Chi Minh City, Vietnam',
    href: null,
  },
]

const STATUS_ITEMS = [
  { label: 'AWS Infrastructure',   status: 'OPERATIONAL',  color: 'emerald' },
  { label: 'Azure Deployments',    status: 'HEALTHY',       color: 'emerald' },
  { label: 'GitLab CI/CD',         status: 'PIPELINE OK',   color: 'emerald' },
  { label: 'Terraform State',      status: 'IN SYNC',       color: 'sky' },
  { label: 'Grafana Monitoring',   status: 'ACTIVE',        color: 'emerald' },
  { label: 'AWS SAA Cert',         status: 'VALID ✓',       color: 'amber' },
]

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [charCount, setCharCount]  = useState(0)
  const [deleting, setDeleting]    = useState(false)

  useEffect(() => {
    const current = ROLES[roleIndex]
    const delay   = deleting ? 45 : 95

    const t = setTimeout(() => {
      if (!deleting) {
        if (charCount < current.length) {
          setCharCount(c => c + 1)
        } else {
          setTimeout(() => setDeleting(true), 1800)
        }
      } else {
        if (charCount > 0) {
          setCharCount(c => c - 1)
        } else {
          setDeleting(false)
          setRoleIndex(i => (i + 1) % ROLES.length)
        }
      }
    }, delay)

    return () => clearTimeout(t)
  }, [charCount, deleting, roleIndex])

  const dotColor = {
    emerald: 'bg-emerald-400 animate-pulse',
    sky:     'bg-sky-400',
    amber:   'bg-amber-400',
  }
  const textColor = {
    emerald: 'text-emerald-400',
    sky:     'text-sky-400',
    amber:   'text-amber-400',
  }

  return (
    <section id="about" className="relative min-h-screen flex items-center pt-16 overflow-hidden scroll-mt-0">
      {/* Dot grid */}
      <div className="absolute inset-0 bg-dot-grid opacity-25 pointer-events-none" />
      {/* Ambient glow blobs */}
      <div className="absolute top-1/4 -left-48 w-[600px] h-[600px] bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-48 w-[600px] h-[600px] bg-sky-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* ── Left column ── */}
          <div>
            <p className="font-mono text-sm text-slate-500 mb-6 flex items-center gap-2">
              <span className="text-emerald-400 text-base">❯</span> whoami
            </p>

            <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight text-white leading-tight mb-2">
              Bui Thanh Quang
            </h1>
            <p className="text-xl text-slate-500 font-mono mb-5">(Marvin)</p>

            {/* Typewriter */}
            <div className="font-mono text-2xl sm:text-3xl mb-7 h-11 flex items-center">
              <span className="text-emerald-400">{ROLES[roleIndex].slice(0, charCount)}</span>
              <span className="ml-0.5 inline-block w-0.5 h-7 bg-emerald-400 animate-blink" />
            </div>

            <p className="text-slate-400 text-lg leading-relaxed mb-8 max-w-xl">
              Designing high-availability AWS &amp; Azure architectures, automating multi-environment
              infrastructure with Terraform &amp; Terragrunt, and building self-healing CI/CD pipelines.
            </p>

            {/* AWS Cert badge */}
            <div className="inline-flex items-center gap-3 bg-slate-800/70 border border-amber-500/30 rounded-xl px-4 py-3 mb-9">
              <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center flex-shrink-0">
                <span className="font-mono text-xs font-bold text-amber-400">aws</span>
              </div>
              <div>
                <p className="font-mono text-xs text-amber-500 font-semibold tracking-widest">AWS CERTIFIED</p>
                <p className="text-sm text-slate-200 font-medium">Solutions Architect – Associate (SAA)</p>
              </div>
              <div className="ml-1 w-6 h-6 rounded-full bg-amber-500/15 border border-amber-500/30 flex items-center justify-center flex-shrink-0">
                <svg className="w-3.5 h-3.5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
            </div>

            {/* Contact links */}
            <div className="flex flex-wrap gap-x-5 gap-y-3">
              {CONTACTS.map(({ icon, label, href, external }) =>
                href ? (
                  <a
                    key={label}
                    href={href}
                    target={external ? '_blank' : undefined}
                    rel={external ? 'noopener noreferrer' : undefined}
                    className="flex items-center gap-2 font-mono text-sm text-slate-400 hover:text-sky-400 transition-colors"
                  >
                    {icon}{label}
                  </a>
                ) : (
                  <span key={label} className="flex items-center gap-2 font-mono text-sm text-slate-500">
                    {icon}{label}
                  </span>
                )
              )}
            </div>
          </div>

          {/* ── Right column – Terminal status panel ── */}
          <div className="hidden lg:block">
            <div className="bg-slate-800/50 border border-slate-700/80 rounded-2xl overflow-hidden shadow-2xl shadow-black/50">
              {/* Titlebar */}
              <div className="flex items-center gap-2 px-4 py-3 bg-slate-800/80 border-b border-slate-700">
                <span className="w-3 h-3 rounded-full bg-red-500/70" />
                <span className="w-3 h-3 rounded-full bg-amber-500/70" />
                <span className="w-3 h-3 rounded-full bg-emerald-500/70" />
                <span className="ml-3 font-mono text-xs text-slate-500">system-status.sh</span>
              </div>

              {/* Terminal body */}
              <div className="p-6 font-mono text-sm space-y-3">
                <div className="flex items-center gap-0">
                  <span className="text-emerald-400">marvin</span>
                  <span className="text-slate-600">@</span>
                  <span className="text-sky-400">cloud-infra</span>
                  <span className="text-slate-500 mx-1">❯</span>
                  <span className="text-slate-300">./status --all-systems</span>
                </div>

                <div className="text-slate-700 select-none">{'─'.repeat(40)}</div>

                <div className="space-y-2.5 pl-1">
                  {STATUS_ITEMS.map(({ label, status, color }) => (
                    <div key={label} className="flex items-center gap-3">
                      <span className={`w-2 h-2 rounded-full flex-shrink-0 ${dotColor[color]}`} />
                      <span className="text-slate-400 w-44 text-xs">{label}</span>
                      <span className={`text-xs font-semibold ${textColor[color]}`}>{status}</span>
                    </div>
                  ))}
                </div>

                <div className="text-slate-700 select-none">{'─'.repeat(40)}</div>

                <div className="flex items-center gap-5 text-xs">
                  <span className="text-slate-500">
                    uptime <span className="text-emerald-400">99.97%</span>
                  </span>
                  <span className="text-slate-500">
                    region <span className="text-sky-400">ap-southeast-1</span>
                  </span>
                </div>

                <div className="flex items-center gap-0.5">
                  <span className="text-emerald-400">marvin</span>
                  <span className="text-slate-600">@</span>
                  <span className="text-sky-400">cloud-infra</span>
                  <span className="text-slate-500 mx-1">❯</span>
                  <span className="w-2 h-4 bg-emerald-400 rounded-sm animate-blink" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll cue */}
        <div className="flex justify-center mt-16">
          <a
            href="#case-studies"
            className="text-slate-700 hover:text-slate-500 transition-colors animate-bounce"
            aria-label="Scroll to case studies"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}

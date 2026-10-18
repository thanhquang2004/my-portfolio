const NAV = [
  { label: '#about',         href: '#about' },
  { label: '#case-studies',  href: '#case-studies' },
  { label: '#skills',        href: '#skills' },
  { label: '#experience',    href: '#experience' },
]

const SOCIALS = [
  { label: 'Website',  href: 'https://marvin.io.vn',                      external: true },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/bui-thanh-quang',   external: true },
  { label: 'Email',    href: 'mailto:thanhquangk22@gmail.com',             external: false },
]

export default function Footer() {
  return (
    <footer className="bg-[#080f1d] border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-8">

        {/* ── Meta DevOps Callout ── */}
        <div className="bg-slate-800/50 border border-emerald-500/20 rounded-xl p-5 mb-12">
          <div className="flex items-start gap-3">
            {/* Terminal icon */}
            <div className="w-9 h-9 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
              <svg className="w-4 h-4 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 9l3 3-3 3m5 0h3" />
              </svg>
            </div>
            <div className="font-mono text-sm leading-relaxed">
              <span className="text-emerald-400 font-bold">Meta DevOps — </span>
              <span className="text-slate-400">
                This static site is{' '}
                <span className="text-sky-400">provisioned via Terraform</span>
                {' '}and hosted on{' '}
                <span className="text-sky-400">cloud object storage (S3 / Azure Blob)</span>
                {' '}fronted by a{' '}
                <span className="text-sky-400">CDN (CloudFront / Front Door)</span>
                {' '}for global edge delivery. Every push to{' '}
                <code className="text-amber-400 bg-amber-400/10 px-1.5 py-0.5 rounded text-xs">main</code>
                {' '}triggers a{' '}
                <span className="text-emerald-400">GitLab CI/CD pipeline</span>
                {' '}that runs{' '}
                <code className="text-slate-300 bg-slate-700/60 px-1.5 py-0.5 rounded text-xs">npm run build</code>
                {' '}and deploys the static bundle automatically — zero manual steps.
              </span>
            </div>
          </div>
        </div>

        {/* ── Footer columns ── */}
        <div className="grid sm:grid-cols-3 gap-8 mb-10">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-0.5 mb-3">
              <span className="font-mono text-sm text-slate-500">~/</span>
              <span className="font-mono text-sm text-emerald-400">marvin</span>
              <span className="font-mono text-sm text-slate-500">.io.vn</span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed">
              Cloud &amp; DevOps Engineer based in Ho Chi Minh City, Vietnam.
              AWS Certified Solutions Architect – Associate.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-mono text-xs text-slate-600 uppercase tracking-widest mb-3">Navigation</h4>
            <ul className="space-y-2">
              {NAV.map(({ label, href }) => (
                <li key={href}>
                  <a
                    href={href}
                    className="font-mono text-sm text-slate-500 hover:text-emerald-400 transition-colors"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-mono text-xs text-slate-600 uppercase tracking-widest mb-3">Contact</h4>
            <ul className="space-y-2">
              {SOCIALS.map(({ label, href, external }) => (
                <li key={label}>
                  <a
                    href={href}
                    target={external ? '_blank' : undefined}
                    rel={external ? 'noopener noreferrer' : undefined}
                    className="font-mono text-sm text-slate-500 hover:text-sky-400 transition-colors"
                  >
                    {label} {external && <span className="text-slate-700">↗</span>}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* ── Bottom bar ── */}
        <div className="border-t border-slate-800 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-mono text-xs text-slate-600">
            © 2026 Bui Thanh Quang (Marvin). All rights reserved.
          </p>
          <p className="font-mono text-xs text-slate-700">
            Built with{' '}
            <span className="text-slate-600">React</span>
            {' · '}
            <span className="text-slate-600">Vite</span>
            {' · '}
            <span className="text-slate-600">Tailwind CSS</span>
          </p>
        </div>
      </div>
    </footer>
  )
}

const TIMELINE = [
  {
    type: 'work',
    role: 'DevOps Engineer',
    company: 'Vinova',
    location: 'Ho Chi Minh City',
    period: 'Apr 2025 – Present',
    current: true,
    bullets: [
      'Leading multi-cloud AWS & Azure infrastructure design and day-to-day operations.',
      'Standardized Terragrunt DRY module templates for multi-environment provisioning.',
      'Built GitLab CI/CD pipelines with automated pre-rollback error-log collection.',
      'Deployed full-stack observability: Prometheus, Grafana, Loki, and CloudWatch.',
      'Governing corporate M365, SharePoint, and Entra ID identity & access management.',
    ],
  },
  {
    type: 'work',
    role: 'DevOps Engineer Intern',
    company: 'Vinova',
    location: 'Ho Chi Minh City',
    period: 'Feb 2025 – Apr 2025',
    current: false,
    bullets: [
      'Dockerized multi-tier web applications with Docker Compose, Nginx, and Apache2.',
      'Migrated manual server deployments to automated GitLab CI/CD pipelines.',
      'Automated backup schedules and health checks via Bash scripting.',
      'Provisioned core AWS resources (EC2, RDS, VPC, Security Groups) with Terraform.',
    ],
  },
  {
    type: 'work',
    role: 'IT Support Intern',
    company: 'University of Transport HCMC',
    location: 'Ho Chi Minh City',
    period: 'Jun 2024 – Dec 2024',
    current: false,
    bullets: [
      'Designed LAN/WAN topologies with Inter-VLAN routing and Xirrus enterprise wireless.',
      'Administered Debian/Ubuntu systems and managed user accounts & permissions.',
      'Diagnosed and resolved L2/L3 network issues across campus infrastructure.',
    ],
  },
  {
    type: 'education',
    role: 'B.S. in Information Technology',
    company: 'University of Transport Ho Chi Minh City',
    location: 'Ho Chi Minh City',
    period: 'Sep 2022 – Apr 2026',
    current: false,
    bullets: [],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-24 scroll-mt-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mb-14">
          <p className="font-mono text-sm text-emerald-400 mb-2">// career path</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Experience & Education</h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical spine */}
          <div className="absolute left-[22px] top-2 bottom-2 w-px bg-slate-800 hidden sm:block" aria-hidden="true" />

          <div className="space-y-6">
            {TIMELINE.map((item, i) => (
              <div key={i} className="sm:pl-14 relative">

                {/* Dot on the spine */}
                <div
                  className={`absolute left-[15px] top-6 w-4 h-4 rounded-full border-2 hidden sm:block ${
                    item.current
                      ? 'bg-emerald-400 border-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.5)]'
                      : item.type === 'education'
                      ? 'bg-sky-400/20 border-sky-500'
                      : 'bg-slate-800 border-slate-600'
                  }`}
                  aria-hidden="true"
                />

                {/* Card */}
                <div
                  className={`bg-slate-800/40 border rounded-xl p-5 transition-colors duration-200 hover:bg-slate-800/60 ${
                    item.current ? 'border-emerald-500/40' : 'border-slate-700/50'
                  }`}
                >
                  {/* Card header */}
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-1">
                    <div>
                      <h3 className="font-semibold text-white text-base leading-snug">{item.role}</h3>
                      <div className="flex flex-wrap items-center gap-1.5 mt-1 text-sm">
                        <span className={item.current ? 'text-emerald-400 font-medium' : 'text-slate-300'}>
                          {item.company}
                        </span>
                        <span className="text-slate-600">·</span>
                        <span className="text-slate-400">{item.location}</span>
                      </div>
                    </div>

                    <div className="flex flex-row sm:flex-col items-start sm:items-end gap-2 flex-shrink-0">
                      <span className="font-mono text-xs text-slate-500 bg-slate-700/50 px-2.5 py-1 rounded-md whitespace-nowrap">
                        {item.period}
                      </span>
                      {item.current && (
                        <span className="font-mono text-xs text-emerald-400 bg-emerald-400/10 border border-emerald-400/25 px-2.5 py-1 rounded-md">
                          CURRENT
                        </span>
                      )}
                      {item.type === 'education' && (
                        <span className="font-mono text-xs text-sky-400 bg-sky-400/10 border border-sky-400/25 px-2.5 py-1 rounded-md">
                          EDUCATION
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Bullets */}
                  {item.bullets.length > 0 && (
                    <ul className="mt-3 space-y-2">
                      {item.bullets.map((b) => (
                        <li key={b} className="flex items-start gap-2 text-sm text-slate-400 leading-relaxed">
                          <span className="text-emerald-500 mt-0.5 flex-shrink-0">›</span>
                          {b}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

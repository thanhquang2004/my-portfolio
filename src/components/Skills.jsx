const SKILL_CATEGORIES = [
  {
    title: 'Cloud Platforms',
    icon: '☁️',
    border: 'border-sky-500/30',
    heading: 'text-sky-400',
    badge: 'text-sky-300 bg-sky-400/10 border-sky-400/20',
    skills: [
      // AWS
      'EC2', 'ECS', 'VPC', 'ALB', 'NAT Gateway', 'RDS', 'ElastiCache',
      'S3', 'CloudFront', 'AWS WAF', 'Lambda', 'SES', 'Route 53',
      // Azure
      'Container Apps', 'API Management', 'Front Door',
      'Service Bus', 'SQL Serverless', 'Entra ID',
    ],
  },
  {
    title: 'Infrastructure as Code',
    icon: '🏗️',
    border: 'border-purple-500/30',
    heading: 'text-purple-400',
    badge: 'text-purple-300 bg-purple-400/10 border-purple-400/20',
    skills: [
      'Terraform', 'Terragrunt', 'AWS CDK',
      'State Management', 'Resource Import', 'Drift Detection', 'Modular Infrastructure',
    ],
  },
  {
    title: 'CI/CD & Containers',
    icon: '🔄',
    border: 'border-emerald-500/30',
    heading: 'text-emerald-400',
    badge: 'text-emerald-300 bg-emerald-400/10 border-emerald-400/20',
    skills: [
      'GitLab CI/CD', 'Jenkins', 'Docker', 'Docker Compose',
      'Kubernetes', 'Automated Rollbacks',
    ],
  },
  {
    title: 'Observability',
    icon: '📊',
    border: 'border-pink-500/30',
    heading: 'text-pink-400',
    badge: 'text-pink-300 bg-pink-400/10 border-pink-400/20',
    skills: ['Prometheus', 'Grafana', 'Loki', 'Amazon CloudWatch'],
  },
  {
    title: 'Networking, OS & Security',
    icon: '🔐',
    border: 'border-amber-500/30',
    heading: 'text-amber-400',
    badge: 'text-amber-300 bg-amber-400/10 border-amber-400/20',
    skills: [
      'Linux (Debian/Ubuntu)', 'Bash', 'Python',
      'TCP/IP', 'OSI Model', 'Inter-VLAN Routing',
      'Nginx', 'Apache2', 'Cloudflare',
      'AWS IAM', 'RBAC', 'M365 & SharePoint Governance',
    ],
  },
  {
    title: 'Databases',
    icon: '🗄️',
    border: 'border-orange-500/30',
    heading: 'text-orange-400',
    badge: 'text-orange-300 bg-orange-400/10 border-orange-400/20',
    skills: ['PostgreSQL', 'MySQL', 'MongoDB'],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-slate-900/60 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mb-14">
          <p className="font-mono text-sm text-emerald-400 mb-2">// technical matrix</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Skills & Technologies</h2>
          <p className="text-slate-400 max-w-2xl">
            A full-stack DevOps toolkit spanning cloud platforms, IaC, CI/CD pipelines, and observability.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SKILL_CATEGORIES.map((cat) => (
            <div
              key={cat.title}
              className={`bg-slate-800/40 border ${cat.border} rounded-xl p-5 hover:bg-slate-800/60 transition-colors duration-200`}
            >
              {/* Category header */}
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-9 h-9 rounded-lg border ${cat.border} flex items-center justify-center text-lg flex-shrink-0`}>
                  {cat.icon}
                </div>
                <h3 className={`font-semibold text-sm ${cat.heading}`}>{cat.title}</h3>
              </div>

              {/* Badge pills */}
              <div className="flex flex-wrap gap-1.5">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className={`font-mono text-xs px-2 py-0.5 rounded border ${cat.badge}`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

import { useState, useEffect } from 'react'

// ─── Shared marker template (solid small triangle, absolute size) ─────────────
// markerUnits="userSpaceOnUse" → size is fixed SVG user-units, never scales with strokeWidth
// refX="7" → tip of triangle sits exactly on the path endpoint
const MK = (id, color) => (
  <marker key={id} id={id} markerWidth="8" markerHeight="8"
    refX="7" refY="4" orient="auto" markerUnits="userSpaceOnUse">
    <polygon points="0,0 7,4 0,8" fill={color} />
  </marker>
)

// ─── Diagram 1 – AWS ECS HA ────────────────────────────────────────────────────
function AwsEcsDiagram() {
  return (
    <svg viewBox="0 0 560 385" className="w-full" xmlns="http://www.w3.org/2000/svg"
      aria-label="AWS High-Availability ECS Architecture">
      <defs>
        {MK('d1-blue',   '#38bdf8')}
        {MK('d1-green',  '#4ade80')}
        {MK('d1-red',    '#f87171')}
        {MK('d1-yellow', '#fbbf24')}
        {MK('d1-purple', '#a78bfa')}
      </defs>

      <rect width="560" height="385" fill="#080f1d" />

      {/* Layer labels */}
      <text x="14" y="16" fill="#0f2d42" fontSize="8.5" fontFamily="monospace" fontWeight="bold">EDGE / CDN LAYER</text>
      <text x="14" y="104" fill="#0a2010" fontSize="8.5" fontFamily="monospace" fontWeight="bold">LOAD BALANCING · PUBLIC SUBNET</text>
      <text x="14" y="192" fill="#0a1828" fontSize="8.5" fontFamily="monospace" fontWeight="bold">COMPUTE · PRIVATE SUBNETS (Multi-AZ)</text>
      <text x="14" y="316" fill="#1a1500" fontSize="8.5" fontFamily="monospace" fontWeight="bold">DATA LAYER</text>

      {/* Internet */}
      <rect x="205" y="26" width="150" height="36" rx="18" fill="#0e1a2e" stroke="#334155" strokeWidth="1" />
      <text x="280" y="48" fill="#94a3b8" textAnchor="middle" fontSize="11" fontFamily="monospace">⬡ Internet</text>

      {/* CloudFront */}
      <rect x="14" y="22" width="158" height="48" rx="6" fill="#04101e" stroke="#38bdf8" strokeWidth="1.5" />
      <text x="93" y="42" fill="#38bdf8" textAnchor="middle" fontSize="11" fontFamily="monospace" fontWeight="bold">CloudFront</text>
      <text x="93" y="58" fill="#7dd3fc" textAnchor="middle" fontSize="8.5" fontFamily="monospace">CDN · Edge Cache · HTTPS</text>

      {/* WAF */}
      <rect x="388" y="22" width="158" height="48" rx="6" fill="#1c0606" stroke="#f87171" strokeWidth="1.5" />
      <text x="467" y="42" fill="#f87171" textAnchor="middle" fontSize="11" fontFamily="monospace" fontWeight="bold">AWS WAF</text>
      <text x="467" y="58" fill="#fca5a5" textAnchor="middle" fontSize="8.5" fontFamily="monospace">DDoS · Bot · IP Rules</text>

      {/* ALB */}
      <rect x="110" y="110" width="340" height="48" rx="6" fill="#04130a" stroke="#4ade80" strokeWidth="1.5" />
      <text x="280" y="130" fill="#4ade80" textAnchor="middle" fontSize="11" fontFamily="monospace" fontWeight="bold">Application Load Balancer</text>
      <text x="280" y="147" fill="#86efac" textAnchor="middle" fontSize="8.5" fontFamily="monospace">SSL Termination · Health Checks · Multi-AZ</text>

      {/* AZ-1 */}
      <rect x="14" y="200" width="248" height="98" rx="6" fill="#030b18" stroke="#1e3a5f" strokeWidth="1" strokeDasharray="5,3" />
      <text x="24" y="216" fill="#2d4a6a" fontSize="8.5" fontFamily="monospace">Availability Zone 1</text>
      <rect x="24" y="222" width="105" height="36" rx="5" fill="#030d1a" stroke="#06b6d4" strokeWidth="1.5" />
      <text x="76" y="245" fill="#06b6d4" textAnchor="middle" fontSize="10" fontFamily="monospace">ECS Task</text>
      <rect x="148" y="222" width="105" height="36" rx="5" fill="#030d1a" stroke="#06b6d4" strokeWidth="1.5" />
      <text x="200" y="245" fill="#06b6d4" textAnchor="middle" fontSize="10" fontFamily="monospace">ECS Task</text>
      <text x="139" y="286" fill="#1e3a5f" textAnchor="middle" fontSize="8" fontFamily="monospace">Private Subnet · No Public IP</text>

      {/* AZ-2 */}
      <rect x="298" y="200" width="248" height="98" rx="6" fill="#030b18" stroke="#1e3a5f" strokeWidth="1" strokeDasharray="5,3" />
      <text x="308" y="216" fill="#2d4a6a" fontSize="8.5" fontFamily="monospace">Availability Zone 2</text>
      <rect x="308" y="222" width="105" height="36" rx="5" fill="#030d1a" stroke="#06b6d4" strokeWidth="1.5" />
      <text x="360" y="245" fill="#06b6d4" textAnchor="middle" fontSize="10" fontFamily="monospace">ECS Task</text>
      <rect x="432" y="222" width="105" height="36" rx="5" fill="#030d1a" stroke="#06b6d4" strokeWidth="1.5" />
      <text x="484" y="245" fill="#06b6d4" textAnchor="middle" fontSize="10" fontFamily="monospace">ECS Task</text>
      <text x="421" y="286" fill="#1e3a5f" textAnchor="middle" fontSize="8" fontFamily="monospace">Private Subnet · No Public IP</text>

      {/* NAT GW */}
      <rect x="14" y="324" width="128" height="42" rx="6" fill="#0c0620" stroke="#a78bfa" strokeWidth="1.5" />
      <text x="78" y="349" fill="#a78bfa" textAnchor="middle" fontSize="10" fontFamily="monospace">NAT Gateway</text>

      {/* ElastiCache */}
      <rect x="160" y="324" width="135" height="42" rx="6" fill="#190606" stroke="#f87171" strokeWidth="1.5" />
      <text x="227" y="340" fill="#f87171" textAnchor="middle" fontSize="10" fontFamily="monospace" fontWeight="bold">ElastiCache</text>
      <text x="227" y="356" fill="#fca5a5" textAnchor="middle" fontSize="8.5" fontFamily="monospace">Redis · Cluster Mode</text>

      {/* RDS */}
      <rect x="313" y="324" width="233" height="42" rx="6" fill="#141000" stroke="#fbbf24" strokeWidth="1.5" />
      <text x="429" y="340" fill="#fbbf24" textAnchor="middle" fontSize="10" fontFamily="monospace" fontWeight="bold">RDS Aurora Multi-AZ</text>
      <text x="429" y="356" fill="#fcd34d" textAnchor="middle" fontSize="8.5" fontFamily="monospace">Primary + Standby · Auto Backups</text>

      {/* ── Straight orthogonal arrows ── */}
      {/* Internet → CloudFront (horizontal left) */}
      <line x1="205" y1="44" x2="172" y2="44" stroke="#38bdf8" strokeWidth="1" markerEnd="url(#d1-blue)" />
      {/* Internet → WAF (horizontal right) */}
      <line x1="355" y1="44" x2="388" y2="44" stroke="#f87171" strokeWidth="1" markerEnd="url(#d1-red)" />
      {/* CloudFront → ALB (down → right → down) */}
      <path d="M93,70 L93,95 L180,95 L180,110" stroke="#38bdf8" strokeWidth="1" fill="none" markerEnd="url(#d1-blue)" opacity="0.9" />
      {/* WAF → ALB (down → left → down) */}
      <path d="M467,70 L467,95 L380,95 L380,110" stroke="#f87171" strokeWidth="1" fill="none" markerEnd="url(#d1-red)" opacity="0.9" />
      {/* ALB → AZ-1 (straight down) */}
      <line x1="138" y1="158" x2="138" y2="200" stroke="#4ade80" strokeWidth="1" markerEnd="url(#d1-green)" />
      {/* ALB → AZ-2 (straight down) */}
      <line x1="422" y1="158" x2="422" y2="200" stroke="#4ade80" strokeWidth="1" markerEnd="url(#d1-green)" />
      {/* AZ-1 → NAT (straight down) */}
      <line x1="78" y1="298" x2="78" y2="324" stroke="#a78bfa" strokeWidth="1" markerEnd="url(#d1-purple)" />
      {/* AZ-1 → ElastiCache (down → right → down) */}
      <path d="M160,298 L160,312 L227,312 L227,324" stroke="#f87171" strokeWidth="1" fill="none" markerEnd="url(#d1-red)" opacity="0.8" />
      {/* AZ-2 → RDS (straight down) */}
      <line x1="422" y1="298" x2="422" y2="324" stroke="#fbbf24" strokeWidth="1" markerEnd="url(#d1-yellow)" />
      {/* AZ-1 → RDS cross-AZ read (dashed) */}
      <path d="M200,298 L200,312 L350,312 L350,324" stroke="#fbbf24" strokeWidth="0.8" fill="none" markerEnd="url(#d1-yellow)" strokeDasharray="5,4" opacity="0.4" />
    </svg>
  )
}

// ─── Diagram 2 – Azure Serverless ─────────────────────────────────────────────
function AzureServerlessDiagram() {
  return (
    <svg viewBox="0 0 560 385" className="w-full" xmlns="http://www.w3.org/2000/svg"
      aria-label="Azure Cloud-Native Serverless Microservices Architecture">
      <defs>
        {MK('d2-blue',   '#38bdf8')}
        {MK('d2-purple', '#a78bfa')}
        {MK('d2-green',  '#34d399')}
        {MK('d2-orange', '#fb923c')}
        {MK('d2-yellow', '#fbbf24')}
      </defs>

      <rect width="560" height="385" fill="#080f1d" />

      {/* Client */}
      <rect x="205" y="14" width="150" height="36" rx="18" fill="#0e1a2e" stroke="#334155" strokeWidth="1" />
      <text x="280" y="36" fill="#94a3b8" textAnchor="middle" fontSize="11" fontFamily="monospace">👤 Client</text>

      {/* Front Door */}
      <rect x="165" y="80" width="230" height="50" rx="6" fill="#040f1e" stroke="#38bdf8" strokeWidth="1.5" />
      <text x="280" y="100" fill="#38bdf8" textAnchor="middle" fontSize="11" fontFamily="monospace" fontWeight="bold">Azure Front Door</text>
      <text x="280" y="118" fill="#7dd3fc" textAnchor="middle" fontSize="8.5" fontFamily="monospace">Global CDN · WAF · Load Balancer</text>

      {/* APIM */}
      <rect x="55" y="170" width="208" height="50" rx="6" fill="#10063a" stroke="#a78bfa" strokeWidth="1.5" />
      <text x="159" y="190" fill="#a78bfa" textAnchor="middle" fontSize="11" fontFamily="monospace" fontWeight="bold">API Management</text>
      <text x="159" y="207" fill="#c4b5fd" textAnchor="middle" fontSize="8.5" fontFamily="monospace">Rate Limiting · Auth · Routing</text>

      {/* Entra ID */}
      <rect x="310" y="170" width="195" height="50" rx="6" fill="#031e13" stroke="#34d399" strokeWidth="1.5" />
      <text x="407" y="190" fill="#34d399" textAnchor="middle" fontSize="11" fontFamily="monospace" fontWeight="bold">Entra ID</text>
      <text x="407" y="207" fill="#6ee7b7" textAnchor="middle" fontSize="8.5" fontFamily="monospace">SSO · OAuth 2.0 / OIDC</text>

      {/* Container Apps */}
      <rect x="55" y="262" width="208" height="50" rx="6" fill="#030d1c" stroke="#06b6d4" strokeWidth="1.5" />
      <text x="159" y="282" fill="#06b6d4" textAnchor="middle" fontSize="11" fontFamily="monospace" fontWeight="bold">Container Apps</text>
      <text x="159" y="299" fill="#67e8f9" textAnchor="middle" fontSize="8.5" fontFamily="monospace">Auto-scale · Dapr · Revisions</text>

      {/* Service Bus */}
      <rect x="310" y="262" width="195" height="50" rx="6" fill="#130800" stroke="#fb923c" strokeWidth="1.5" />
      <text x="407" y="282" fill="#fb923c" textAnchor="middle" fontSize="11" fontFamily="monospace" fontWeight="bold">Service Bus</text>
      <text x="407" y="299" fill="#fdba74" textAnchor="middle" fontSize="8.5" fontFamily="monospace">Async Queues · Pub/Sub Topics</text>

      {/* Serverless SQL */}
      <rect x="155" y="346" width="250" height="30" rx="6" fill="#151000" stroke="#fbbf24" strokeWidth="1.5" />
      <text x="280" y="365" fill="#fbbf24" textAnchor="middle" fontSize="11" fontFamily="monospace" fontWeight="bold">Azure SQL Serverless</text>

      {/* ── Arrows ── */}
      {/* Client → Front Door (straight down) */}
      <line x1="280" y1="50" x2="280" y2="80" stroke="#38bdf8" strokeWidth="1" markerEnd="url(#d2-blue)" />
      {/* Front Door → APIM (down → left → down) */}
      <path d="M220,130 L220,155 L159,155 L159,170" stroke="#38bdf8" strokeWidth="1" fill="none" markerEnd="url(#d2-blue)" opacity="0.9" />
      {/* APIM ↔ Entra ID auth check (dashed horizontal) */}
      <line x1="263" y1="195" x2="310" y2="195" stroke="#34d399" strokeWidth="1" strokeDasharray="5,4" markerEnd="url(#d2-green)" opacity="0.85" />
      {/* APIM → Container Apps (straight down) */}
      <line x1="159" y1="220" x2="159" y2="262" stroke="#a78bfa" strokeWidth="1" markerEnd="url(#d2-purple)" />
      {/* Container Apps → Service Bus (horizontal) */}
      <line x1="263" y1="287" x2="310" y2="287" stroke="#fb923c" strokeWidth="1" markerEnd="url(#d2-orange)" />
      {/* Container Apps → SQL (down → right → down) */}
      <path d="M159,312 L159,334 L215,334 L215,346" stroke="#fbbf24" strokeWidth="1" fill="none" markerEnd="url(#d2-yellow)" />
      {/* Service Bus → SQL (down → left → down) */}
      <path d="M407,312 L407,334 L345,334 L345,346" stroke="#fbbf24" strokeWidth="1" fill="none" markerEnd="url(#d2-yellow)" opacity="0.8" />
    </svg>
  )
}

// ─── Diagram 3 – GitLab CI/CD Multi-Cloud ─────────────────────────────────────
function GitlabCicdDiagram() {
  return (
    <svg viewBox="0 0 560 385" className="w-full" xmlns="http://www.w3.org/2000/svg"
      aria-label="Multi-Cloud IaC and GitLab CI/CD Pipeline Architecture">
      <defs>
        {MK('d3-green',  '#4ade80')}
        {MK('d3-orange', '#f59e0b')}
        {MK('d3-blue',   '#38bdf8')}
        {MK('d3-yellow', '#fbbf24')}
        {MK('d3-red',    '#f87171')}
        {MK('d3-cyan',   '#06b6d4')}
        {MK('d3-purple', '#a78bfa')}
      </defs>

      <rect width="560" height="385" fill="#080f1d" />

      {/* Labels */}
      <text x="14" y="15" fill="#0a2515" fontSize="8.5" fontFamily="monospace" fontWeight="bold">GitLab CI/CD PIPELINE STAGES</text>

      {/* Push */}
      <rect x="14" y="22" width="82" height="48" rx="6" fill="#0c0628" stroke="#a78bfa" strokeWidth="1.5" />
      <text x="55" y="42" fill="#a78bfa" textAnchor="middle" fontSize="10" fontFamily="monospace" fontWeight="bold">git push</text>
      <text x="55" y="57" fill="#c4b5fd" textAnchor="middle" fontSize="8.5" fontFamily="monospace">dev / main</text>

      {/* Build */}
      <rect x="112" y="22" width="88" height="48" rx="6" fill="#04120a" stroke="#4ade80" strokeWidth="1.5" />
      <text x="156" y="42" fill="#4ade80" textAnchor="middle" fontSize="10" fontFamily="monospace" fontWeight="bold">Build</text>
      <text x="156" y="57" fill="#86efac" textAnchor="middle" fontSize="8.5" fontFamily="monospace">Docker · Lint</text>

      {/* Test */}
      <rect x="216" y="22" width="88" height="48" rx="6" fill="#04120a" stroke="#4ade80" strokeWidth="1.5" />
      <text x="260" y="42" fill="#4ade80" textAnchor="middle" fontSize="10" fontFamily="monospace" fontWeight="bold">Test</text>
      <text x="260" y="57" fill="#86efac" textAnchor="middle" fontSize="8.5" fontFamily="monospace">Unit · Integration</text>

      {/* TF Plan */}
      <rect x="320" y="22" width="88" height="48" rx="6" fill="#151000" stroke="#fbbf24" strokeWidth="1.5" />
      <text x="364" y="42" fill="#fbbf24" textAnchor="middle" fontSize="10" fontFamily="monospace" fontWeight="bold">TF Plan</text>
      <text x="364" y="57" fill="#fcd34d" textAnchor="middle" fontSize="8.5" fontFamily="monospace">Drift Detect</text>

      {/* TF Apply */}
      <rect x="424" y="22" width="122" height="48" rx="6" fill="#04120a" stroke="#4ade80" strokeWidth="1.5" />
      <text x="485" y="42" fill="#4ade80" textAnchor="middle" fontSize="10" fontFamily="monospace" fontWeight="bold">TF Apply</text>
      <text x="485" y="57" fill="#86efac" textAnchor="middle" fontSize="8.5" fontFamily="monospace">Terragrunt</text>

      {/* Divider */}
      <line x1="14" y1="96" x2="546" y2="96" stroke="#1a2438" strokeWidth="1" />
      <text x="14" y="114" fill="#0f2820" fontSize="8.5" fontFamily="monospace" fontWeight="bold">CLOUD TARGETS</text>

      {/* AWS */}
      <rect x="14" y="120" width="246" height="80" rx="6" fill="#0c0900" stroke="#f59e0b" strokeWidth="1.5" />
      <text x="137" y="141" fill="#f59e0b" textAnchor="middle" fontSize="11" fontFamily="monospace" fontWeight="bold">AWS Infrastructure</text>
      <text x="137" y="158" fill="#fbbf24" textAnchor="middle" fontSize="8.5" fontFamily="monospace">ECS · RDS · ElastiCache · VPC</text>
      <text x="137" y="174" fill="#fbbf24" textAnchor="middle" fontSize="8.5" fontFamily="monospace">S3 · Route 53 · CloudFront</text>
      <text x="137" y="190" fill="#78350f" textAnchor="middle" fontSize="8" fontFamily="monospace">ap-southeast-1 / ap-northeast-1</text>

      {/* Azure */}
      <rect x="300" y="120" width="246" height="80" rx="6" fill="#040f1c" stroke="#38bdf8" strokeWidth="1.5" />
      <text x="423" y="141" fill="#38bdf8" textAnchor="middle" fontSize="11" fontFamily="monospace" fontWeight="bold">Azure Infrastructure</text>
      <text x="423" y="158" fill="#7dd3fc" textAnchor="middle" fontSize="8.5" fontFamily="monospace">Container Apps · SQL Serverless</text>
      <text x="423" y="174" fill="#7dd3fc" textAnchor="middle" fontSize="8.5" fontFamily="monospace">Front Door · Service Bus</text>
      <text x="423" y="190" fill="#0c3a5e" textAnchor="middle" fontSize="8" fontFamily="monospace">Southeast Asia / East Asia</text>

      {/* Divider */}
      <line x1="14" y1="222" x2="546" y2="222" stroke="#1a2438" strokeWidth="1" />
      <text x="14" y="240" fill="#1a1030" fontSize="8.5" fontFamily="monospace" fontWeight="bold">STATE MANAGEMENT</text>
      <text x="310" y="240" fill="#2d0f0f" fontSize="8.5" fontFamily="monospace" fontWeight="bold">ERROR HANDLING</text>

      {/* Remote State */}
      <rect x="14" y="246" width="270" height="50" rx="6" fill="#0e0624" stroke="#a78bfa" strokeWidth="1.5" />
      <text x="149" y="266" fill="#a78bfa" textAnchor="middle" fontSize="10" fontFamily="monospace" fontWeight="bold">Remote State (S3 / Azure Blob)</text>
      <text x="149" y="283" fill="#c4b5fd" textAnchor="middle" fontSize="8.5" fontFamily="monospace">DRY Modules · Resource Import · Drift</text>

      {/* Error Log */}
      <rect x="305" y="246" width="115" height="50" rx="6" fill="#190404" stroke="#f87171" strokeWidth="1.5" />
      <text x="362" y="266" fill="#f87171" textAnchor="middle" fontSize="10" fontFamily="monospace" fontWeight="bold">Error Logs</text>
      <text x="362" y="283" fill="#fca5a5" textAnchor="middle" fontSize="8.5" fontFamily="monospace">Pre-rollback</text>

      {/* Rollback */}
      <rect x="432" y="246" width="114" height="50" rx="6" fill="#190404" stroke="#f87171" strokeWidth="1.5" />
      <text x="489" y="275" fill="#f87171" textAnchor="middle" fontSize="10" fontFamily="monospace" fontWeight="bold">Auto Rollback</text>

      {/* Container Registry */}
      <rect x="145" y="322" width="270" height="50" rx="6" fill="#030d1c" stroke="#06b6d4" strokeWidth="1.5" />
      <text x="280" y="342" fill="#06b6d4" textAnchor="middle" fontSize="10" fontFamily="monospace" fontWeight="bold">Container Registry</text>
      <text x="280" y="359" fill="#67e8f9" textAnchor="middle" fontSize="8.5" fontFamily="monospace">Docker Images · Tags · Semantic Versions</text>

      {/* ── Straight orthogonal arrows ── */}
      {/* Pipeline stage links */}
      <line x1="96"  y1="46" x2="112" y2="46" stroke="#4ade80" strokeWidth="1" markerEnd="url(#d3-green)" />
      <line x1="200" y1="46" x2="216" y2="46" stroke="#4ade80" strokeWidth="1" markerEnd="url(#d3-green)" />
      <line x1="304" y1="46" x2="320" y2="46" stroke="#4ade80" strokeWidth="1" markerEnd="url(#d3-green)" />
      <line x1="408" y1="46" x2="424" y2="46" stroke="#4ade80" strokeWidth="1" markerEnd="url(#d3-green)" />
      {/* TF Apply → AWS  (down → left → down, exits left side of TF Apply) */}
      <path d="M464,70 L464,100 L137,100 L137,120" stroke="#f59e0b" strokeWidth="1" fill="none" markerEnd="url(#d3-orange)" opacity="0.95" />
      {/* TF Apply → Azure (down → left → down, exits right side, different y-rail) */}
      <path d="M506,70 L506,110 L423,110 L423,120" stroke="#38bdf8" strokeWidth="1" fill="none" markerEnd="url(#d3-blue)" opacity="0.95" />
      {/* AWS → State (down → right → down, dashed) */}
      <path d="M137,200 L137,232 L149,232 L149,246" stroke="#a78bfa" strokeWidth="0.8" fill="none" strokeDasharray="5,4" markerEnd="url(#d3-purple)" opacity="0.5" />
      {/* Azure → State (down → left → down, dashed) */}
      <path d="M423,200 L423,232 L284,232 L284,246" stroke="#a78bfa" strokeWidth="0.8" fill="none" strokeDasharray="5,4" markerEnd="url(#d3-purple)" opacity="0.5" />
      {/* Error Log → Rollback */}
      <line x1="420" y1="271" x2="432" y2="271" stroke="#f87171" strokeWidth="1" markerEnd="url(#d3-red)" />
      {/* Build → Registry (dashed long path, down left edge then right) */}
      <path d="M156,70 L156,308 L210,308 L210,322" stroke="#06b6d4" strokeWidth="0.8" fill="none" strokeDasharray="5,4" markerEnd="url(#d3-cyan)" opacity="0.55" />
    </svg>
  )
}

// ─── Diagram 4 – Observability ────────────────────────────────────────────────
function ObservabilityDiagram() {
  return (
    <svg viewBox="0 0 560 385" className="w-full" xmlns="http://www.w3.org/2000/svg"
      aria-label="Full-Stack Observability and Cost-Optimized Operations Architecture">
      <defs>
        {MK('d4-pink',   '#e879f9')}
        {MK('d4-blue',   '#38bdf8')}
        {MK('d4-orange', '#f59e0b')}
        {MK('d4-red',    '#f87171')}
      </defs>

      <rect width="560" height="385" fill="#080f1d" />

      {/* Labels */}
      <text x="14" y="15" fill="#0a2010" fontSize="8.5" fontFamily="monospace" fontWeight="bold">METRIC / LOG SOURCES</text>

      {/* ECS */}
      <rect x="14" y="22" width="118" height="46" rx="6" fill="#030d1c" stroke="#06b6d4" strokeWidth="1.5" />
      <text x="73" y="41" fill="#06b6d4" textAnchor="middle" fontSize="10" fontFamily="monospace" fontWeight="bold">ECS / K8s</text>
      <text x="73" y="57" fill="#67e8f9" textAnchor="middle" fontSize="8.5" fontFamily="monospace">Containers</text>

      {/* EC2 */}
      <rect x="146" y="22" width="100" height="46" rx="6" fill="#0c0900" stroke="#f59e0b" strokeWidth="1.5" />
      <text x="196" y="41" fill="#f59e0b" textAnchor="middle" fontSize="10" fontFamily="monospace" fontWeight="bold">EC2</text>
      <text x="196" y="57" fill="#fbbf24" textAnchor="middle" fontSize="8.5" fontFamily="monospace">Instances</text>

      {/* Lambda */}
      <rect x="260" y="22" width="100" height="46" rx="6" fill="#0c0900" stroke="#f59e0b" strokeWidth="1.5" />
      <text x="310" y="41" fill="#f59e0b" textAnchor="middle" fontSize="10" fontFamily="monospace" fontWeight="bold">Lambda</text>
      <text x="310" y="57" fill="#fbbf24" textAnchor="middle" fontSize="8.5" fontFamily="monospace">Functions</text>

      {/* RDS */}
      <rect x="374" y="22" width="172" height="46" rx="6" fill="#141000" stroke="#fbbf24" strokeWidth="1.5" />
      <text x="460" y="41" fill="#fbbf24" textAnchor="middle" fontSize="10" fontFamily="monospace" fontWeight="bold">RDS / Databases</text>
      <text x="460" y="57" fill="#fcd34d" textAnchor="middle" fontSize="8.5" fontFamily="monospace">Query Performance</text>

      {/* Labels */}
      <text x="14" y="100" fill="#0f1830" fontSize="8.5" fontFamily="monospace" fontWeight="bold">COLLECTORS</text>

      {/* Prometheus */}
      <rect x="14" y="106" width="158" height="50" rx="6" fill="#140628" stroke="#e879f9" strokeWidth="1.5" />
      <text x="93" y="126" fill="#e879f9" textAnchor="middle" fontSize="11" fontFamily="monospace" fontWeight="bold">Prometheus</text>
      <text x="93" y="143" fill="#f0abfc" textAnchor="middle" fontSize="8.5" fontFamily="monospace">Metrics · Alerting Rules</text>

      {/* Loki */}
      <rect x="192" y="106" width="158" height="50" rx="6" fill="#050f20" stroke="#38bdf8" strokeWidth="1.5" />
      <text x="271" y="126" fill="#38bdf8" textAnchor="middle" fontSize="11" fontFamily="monospace" fontWeight="bold">Loki</text>
      <text x="271" y="143" fill="#7dd3fc" textAnchor="middle" fontSize="8.5" fontFamily="monospace">Log Aggregation</text>

      {/* CloudWatch */}
      <rect x="370" y="106" width="176" height="50" rx="6" fill="#0c0900" stroke="#f59e0b" strokeWidth="1.5" />
      <text x="458" y="126" fill="#f59e0b" textAnchor="middle" fontSize="11" fontFamily="monospace" fontWeight="bold">CloudWatch</text>
      <text x="458" y="143" fill="#fbbf24" textAnchor="middle" fontSize="8.5" fontFamily="monospace">AWS Native Monitoring</text>

      {/* Grafana */}
      <rect x="160" y="200" width="240" height="62" rx="6" fill="#140628" stroke="#e879f9" strokeWidth="2" />
      <text x="280" y="224" fill="#e879f9" textAnchor="middle" fontSize="13" fontFamily="monospace" fontWeight="bold">Grafana</text>
      <text x="280" y="244" fill="#f0abfc" textAnchor="middle" fontSize="8.5" fontFamily="monospace">Dashboards · Alerts · On-Call Routing</text>

      {/* Alert Rules */}
      <rect x="14" y="200" width="130" height="62" rx="6" fill="#1c0404" stroke="#f87171" strokeWidth="1.5" />
      <text x="79" y="224" fill="#f87171" textAnchor="middle" fontSize="10" fontFamily="monospace" fontWeight="bold">Alert Rules</text>
      <text x="79" y="241" fill="#fca5a5" textAnchor="middle" fontSize="8.5" fontFamily="monospace">PagerDuty</text>
      <text x="79" y="255" fill="#fca5a5" textAnchor="middle" fontSize="8.5" fontFamily="monospace">Slack · Email</text>

      {/* Anomaly */}
      <rect x="416" y="200" width="130" height="62" rx="6" fill="#050f20" stroke="#38bdf8" strokeWidth="1.5" />
      <text x="481" y="218" fill="#38bdf8" textAnchor="middle" fontSize="10" fontFamily="monospace" fontWeight="bold">Anomaly</text>
      <text x="481" y="234" fill="#7dd3fc" textAnchor="middle" fontSize="9" fontFamily="monospace">Detection</text>
      <text x="481" y="250" fill="#7dd3fc" textAnchor="middle" fontSize="8.5" fontFamily="monospace">Container Health</text>

      {/* Divider */}
      <line x1="14" y1="286" x2="546" y2="286" stroke="#1a2438" strokeWidth="1" />
      <text x="14" y="304" fill="#0a1800" fontSize="8.5" fontFamily="monospace" fontWeight="bold">SERVERLESS AUTOMATION · COST-OPTIMIZED OPS</text>

      {/* Bottom automation boxes */}
      {[
        { x: 14,  label: 'Lambda',   sub: 'Automation',   stroke: '#f59e0b', fill: '#0c0900' },
        { x: 133, label: 'S3',       sub: 'Storage',      stroke: '#f59e0b', fill: '#0c0900' },
        { x: 252, label: 'SES',      sub: 'Email Alerts', stroke: '#4ade80', fill: '#04120a' },
        { x: 371, label: 'Route 53', sub: 'DNS Routing',  stroke: '#38bdf8', fill: '#04111c' },
      ].map(({ x, label, sub, stroke, fill }) => (
        <g key={label}>
          <rect x={x} y="310" width="109" height="46" rx="6" fill={fill} stroke={stroke} strokeWidth="1.5" />
          <text x={x + 54} y="329" fill={stroke} textAnchor="middle" fontSize="10" fontFamily="monospace" fontWeight="bold">{label}</text>
          <text x={x + 54} y="346" fill={stroke} textAnchor="middle" fontSize="8.5" fontFamily="monospace" opacity={0.7}>{sub}</text>
        </g>
      ))}
      <rect x="490" y="310" width="56" height="46" rx="6" fill="#0c0900" stroke="#f59e0b" strokeWidth="1.5" />
      <text x="518" y="328" fill="#f59e0b" textAnchor="middle" fontSize="9" fontFamily="monospace" fontWeight="bold">EC2</text>
      <text x="518" y="341" fill="#fbbf24" textAnchor="middle" fontSize="7.5" fontFamily="monospace">Single</text>
      <text x="518" y="352" fill="#fbbf24" textAnchor="middle" fontSize="7.5" fontFamily="monospace">Docker</text>

      {/* ── Straight orthogonal arrows ── */}
      {/* ECS → Prometheus (straight down) */}
      <line x1="73" y1="68" x2="73" y2="106" stroke="#e879f9" strokeWidth="1" markerEnd="url(#d4-pink)" />
      {/* EC2 → Prometheus (down → left → down, mid y=84) */}
      <path d="M196,68 L196,84 L93,84 L93,106" stroke="#e879f9" strokeWidth="1" fill="none" markerEnd="url(#d4-pink)" opacity="0.7" />
      {/* ECS → Loki (dashed, down → right → down, mid y=90) */}
      <path d="M73,68 L73,90 L271,90 L271,106" stroke="#38bdf8" strokeWidth="0.8" fill="none" strokeDasharray="5,4" markerEnd="url(#d4-blue)" opacity="0.5" />
      {/* Lambda → CloudWatch (down → right → down, mid y=84) */}
      <path d="M310,68 L310,84 L440,84 L440,106" stroke="#f59e0b" strokeWidth="1" fill="none" markerEnd="url(#d4-orange)" opacity="0.9" />
      {/* RDS → CloudWatch (straight down) */}
      <line x1="460" y1="68" x2="460" y2="106" stroke="#f59e0b" strokeWidth="1" markerEnd="url(#d4-orange)" />
      {/* Prometheus → Grafana (down → right → down) */}
      <path d="M93,156 L93,178 L215,178 L215,200" stroke="#e879f9" strokeWidth="1" fill="none" markerEnd="url(#d4-pink)" opacity="0.9" />
      {/* Loki → Grafana (straight down, within Grafana x range) */}
      <line x1="271" y1="156" x2="271" y2="200" stroke="#38bdf8" strokeWidth="1" markerEnd="url(#d4-blue)" opacity="0.9" />
      {/* CloudWatch → Grafana (down → left → down) */}
      <path d="M458,156 L458,178 L345,178 L345,200" stroke="#f59e0b" strokeWidth="1" fill="none" markerEnd="url(#d4-orange)" opacity="0.8" />
      {/* Grafana → Alerts (horizontal left) */}
      <line x1="160" y1="231" x2="144" y2="231" stroke="#f87171" strokeWidth="1" markerEnd="url(#d4-red)" opacity="0.85" />
      {/* Grafana → Anomaly (horizontal right) */}
      <line x1="400" y1="231" x2="416" y2="231" stroke="#38bdf8" strokeWidth="1" markerEnd="url(#d4-blue)" opacity="0.85" />
    </svg>
  )
}

// ─── Case study data ──────────────────────────────────────────────────────────
const CASE_STUDIES = [
  {
    id: 1,
    tag: 'AWS · ECS · High-Availability',
    title: 'High-Availability AWS ECS Production Architecture',
    DiagramComponent: AwsEcsDiagram,
    problem: 'Production workloads needed zero-downtime multi-AZ deployments, DDoS protection, and sub-10 ms cache-hit response times without exposing container instances to the internet.',
    highlights: [
      'Isolated ECS clusters in Private Subnets across multiple AZs',
      'CloudFront CDN + AWS WAF for edge delivery and threat mitigation',
      'ElastiCache Redis for session and query caching',
      'RDS Aurora Multi-AZ with automated failover and backups',
      'NAT Gateways for secure outbound-only internet access',
    ],
    tech: ['ECS', 'ALB', 'CloudFront', 'WAF', 'ElastiCache', 'RDS Aurora', 'VPC', 'NAT Gateway'],
    accent: 'border-sky-500/30 hover:border-sky-400/50',
    tag_style: 'text-sky-400 bg-sky-400/10',
  },
  {
    id: 2,
    tag: 'Azure · Serverless · Microservices',
    title: 'Cloud-Native Serverless Microservices on Azure',
    DiagramComponent: AzureServerlessDiagram,
    problem: 'Required a scalable serverless platform that decouples async workloads, eliminates idle-compute costs via dynamic scaling, and enforces centralized identity through SSO.',
    highlights: [
      'Azure Service Bus for async workload decoupling (queues + pub/sub)',
      'Container Apps with Dapr sidecar for service-mesh communication',
      'SQL Serverless with auto-pause to cut idle database spend',
      'Front Door + APIM for global API routing and rate limiting',
      'Entra ID SSO with OAuth 2.0 / OIDC enforced at the API layer',
    ],
    tech: ['Container Apps', 'Service Bus', 'Front Door', 'API Management', 'Entra ID', 'SQL Serverless'],
    accent: 'border-blue-500/30 hover:border-blue-400/50',
    tag_style: 'text-blue-400 bg-blue-400/10',
  },
  {
    id: 3,
    tag: 'Terraform · GitLab CI/CD · Multi-Cloud',
    title: 'Multi-Cloud IaC & Self-Healing GitLab CI/CD',
    DiagramComponent: GitlabCicdDiagram,
    problem: 'Manual cross-cloud deployments led to configuration drift, inconsistent environments, and slow incident recovery without structured rollback procedures.',
    highlights: [
      'DRY Terragrunt modules for consistent multi-environment provisioning',
      'Remote state management with drift detection and resource import',
      'GitLab CI/CD with automated pre-rollback error-log collection',
      'Dockerized builds pushed to a versioned container registry',
      'Pipeline branches into AWS and Azure apply stages independently',
    ],
    tech: ['Terraform', 'Terragrunt', 'GitLab CI/CD', 'Docker', 'AWS CDK', 'S3', 'Azure Blob'],
    accent: 'border-emerald-500/30 hover:border-emerald-400/50',
    tag_style: 'text-emerald-400 bg-emerald-400/10',
  },
  {
    id: 4,
    tag: 'Prometheus · Grafana · Cost Ops',
    title: 'Full-Stack Observability & Cost-Optimized Ops',
    DiagramComponent: ObservabilityDiagram,
    problem: 'Container anomalies went undetected for hours, and lightweight client workloads were over-provisioned on expensive multi-instance setups, inflating the monthly bill.',
    highlights: [
      'Prometheus + Grafana for centralized metrics dashboards and alerts',
      'Loki for log aggregation and LogQL-based pattern queries',
      'CloudWatch integration for native AWS telemetry',
      'Cost-effective single-EC2 Docker setups for lightweight workloads',
      'Serverless automation via Lambda, S3, SES, and Route 53',
    ],
    tech: ['Prometheus', 'Grafana', 'Loki', 'CloudWatch', 'Lambda', 'S3', 'SES', 'Route 53'],
    accent: 'border-purple-500/30 hover:border-purple-400/50',
    tag_style: 'text-purple-400 bg-purple-400/10',
  },
]

// ─── Zoom modal ────────────────────────────────────────────────────────────────
function DiagramModal({ study, onClose }) {
  const [zoom, setZoom] = useState(1)
  const { DiagramComponent, title } = study

  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && onClose()
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => { document.removeEventListener('keydown', onKey); document.body.style.overflow = '' }
  }, [onClose])

  const adjust = (d) => setZoom(z => Math.min(3, Math.max(0.5, parseFloat((z + d).toFixed(2)))))

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-sm p-4"
      onClick={onClose} role="dialog" aria-modal="true" aria-label={title}>
      <div className="relative bg-slate-900 border border-slate-700 rounded-xl overflow-hidden w-full max-w-4xl shadow-2xl"
        onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-slate-700 bg-slate-800/90">
          <span className="font-mono text-sm text-slate-300 truncate pr-4">{title}</span>
          <div className="flex items-center gap-3 flex-shrink-0">
            <div className="flex items-center gap-1 bg-slate-700/60 border border-slate-600/50 rounded-lg p-1">
              <button onClick={() => adjust(-0.25)} disabled={zoom <= 0.5}
                className="w-7 h-7 flex items-center justify-center text-slate-300 hover:text-white disabled:text-slate-600 font-mono text-lg leading-none">−</button>
              <span className="font-mono text-xs text-slate-400 w-12 text-center select-none">{Math.round(zoom * 100)}%</span>
              <button onClick={() => adjust(0.25)} disabled={zoom >= 3}
                className="w-7 h-7 flex items-center justify-center text-slate-300 hover:text-white disabled:text-slate-600 font-mono text-lg leading-none">+</button>
            </div>
            <button onClick={onClose} className="p-1.5 text-slate-400 hover:text-white rounded-md hover:bg-slate-700/50">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
        {/* Diagram */}
        <div className="overflow-auto bg-[#080f1d]" style={{ maxHeight: '78vh' }}>
          <div style={{ width: `${zoom * 100}%` }}>
            <DiagramComponent />
          </div>
        </div>
      </div>
    </div>
  )
}

// ─── Section ───────────────────────────────────────────────────────────────────
export default function CaseStudies() {
  const [activeStudy, setActiveStudy] = useState(null)

  return (
    <section id="case-studies" className="py-24 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-14">
          <p className="font-mono text-sm text-emerald-400 mb-2">// featured work</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Architecture Case Studies</h2>
          <p className="text-slate-400 max-w-2xl">
            Production-grade cloud architectures I designed and implemented.
            Click any diagram to zoom into the full architecture.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {CASE_STUDIES.map((cs) => (
            <div key={cs.id} className={`bg-slate-800/40 border ${cs.accent} rounded-xl overflow-hidden card-glow`}>
              {/* Diagram thumbnail */}
              <div className="relative cursor-zoom-in bg-[#080f1d] group"
                onClick={() => setActiveStudy(cs)} role="button" tabIndex={0}
                aria-label={`Open diagram: ${cs.title}`}
                onKeyDown={(e) => e.key === 'Enter' && setActiveStudy(cs)}>
                <cs.DiagramComponent />
                <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/25 transition-colors duration-200 pointer-events-none" />
                <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity bg-slate-900/80 border border-slate-600 rounded-md px-2.5 py-1 flex items-center gap-1.5 font-mono text-xs text-slate-300 pointer-events-none">
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                  </svg>
                  Zoom
                </div>
              </div>

              {/* Card body */}
              <div className="p-6">
                <span className={`inline-block font-mono text-xs px-2.5 py-1 rounded-md mb-3 ${cs.tag_style}`}>{cs.tag}</span>
                <h3 className="text-base font-semibold text-white mb-3 leading-snug">{cs.title}</h3>
                <p className="text-slate-400 text-sm mb-4 leading-relaxed">{cs.problem}</p>
                <ul className="space-y-1.5 mb-5">
                  {cs.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-2 text-sm text-slate-400">
                      <span className="text-emerald-500 mt-0.5 flex-shrink-0">›</span>{h}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-1.5">
                  {cs.tech.map((t) => (
                    <span key={t} className="font-mono text-xs px-2 py-0.5 bg-slate-700/60 text-slate-300 rounded border border-slate-600/40">{t}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {activeStudy && <DiagramModal study={activeStudy} onClose={() => setActiveStudy(null)} />}
    </section>
  )
}

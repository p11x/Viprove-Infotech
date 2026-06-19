import { motion } from 'framer-motion'
import { Code2, Smartphone, TabletSmartphone, Apple, Cloud, Brain, Cpu, GitBranch } from 'lucide-react'
import { ScrollReveal } from '../../ui/ScrollReveal'
import { platforms } from '../../../data/content'
import { useTheme } from '../../../context/ThemeContext'

const iconMap = {
  Code2,
  Smartphone,
  TabletSmartphone,
  Apple,
  Cloud,
  Brain,
  Cpu,
  GitBranch,
}

export function PlatformsGrid() {
  const { isDark } = useTheme()
  const safePlatforms = platforms ?? []
  const cardBg = isDark ? '#0F172A' : 'var(--bg-elevated)'
  const cardText = isDark ? '#FFFFFF' : 'var(--text-primary)'
  const cardBorder = isDark ? 'rgba(255,255,255,0.06)' : 'var(--border)'

  return (
    <section className="section-padding relative bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="mb-16">
            <div className="mb-4">
              <span
                className="inline-flex items-center px-4 py-1.5 rounded-full border text-xs font-mono uppercase tracking-wider"
                style={{ 
                  background: isDark ? 'rgba(129,140,248,0.15)' : 'rgba(79,70,229,0.1)',
                  borderColor: 'var(--border)',
                  color: 'var(--accent-primary)'
                }}
              >
                // TECHNOLOGY INDEX
              </span>
            </div>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary mb-4 leading-tight">
              Improve and Innovate with the{' '}
              <span className="gradient-text">Right Tech Stack</span>
            </h2>
            <p className="text-text-secondary max-w-2xl text-lg">
              We work with modern frameworks and platforms to keep products performant, scalable, and ready for change.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {safePlatforms.map((platform, i) => {
            const Icon = iconMap[platform.icon] ?? Code2
            return (
              <ScrollReveal key={platform.id} direction="up" delay={i * 0.07}>
                <motion.div
                  whileHover={{
                    scale: 1.04,
                    borderColor: `${platform.color}66`,
                    boxShadow: `0 0 24px ${platform.color}30`,
                  }}
                  transition={{ duration: 0.3, ease: 'easeOut' }}
                  className="h-full rounded-xl p-6 flex flex-col items-center text-center"
                  style={{
                    background: cardBg,
                    border: `1px solid ${cardBorder}`,
                  }}
                >
                  <div
                    className="w-14 h-14 rounded-xl border flex items-center justify-center mb-4"
                    style={{ borderColor: `${platform.color}66` }}
                  >
                    <Icon className="w-7 h-7" style={{ color: platform.color }} />
                  </div>
                  <h3 className="font-display font-semibold text-sm mb-1.5" style={{ color: cardText }}>
                    {platform.label}
                  </h3>
                  <p className="text-xs" style={{ color: cardText === '#FFFFFF' ? '#94A3B8' : 'var(--text-muted)' }}>{platform.desc}</p>
                </motion.div>
              </ScrollReveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
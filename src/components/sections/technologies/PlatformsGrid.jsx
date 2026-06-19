import { motion } from 'framer-motion'
import { Code2, Smartphone, TabletSmartphone, Apple, Cloud, Brain, Cpu, GitBranch } from 'lucide-react'
import { ScrollReveal } from '../../ui/ScrollReveal'
import { SectionHeader } from '../../ui/SectionHeader'
import { platforms } from '../../../data/content'

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
  return (
    <section className="section-padding relative bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeader
            eyebrow="// TECHNOLOGY INDEX"
            title={<>Improve and Innovate with the <span className="gradient-text">Right Tech Stack</span></>}
            subtitle="We work with modern frameworks and platforms to keep products performant, scalable, and ready for change."
          />
        </ScrollReveal>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {platforms.map((platform, i) => {
            const Icon = iconMap[platform.icon]
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
                    background: '#0F172A',
                    border: '1px solid rgba(255,255,255,0.06)',
                  }}
                >
                  <div
                    className="w-14 h-14 rounded-xl border flex items-center justify-center mb-4"
                    style={{ borderColor: `${platform.color}66` }}
                  >
                    <Icon className="w-7 h-7" style={{ color: platform.color }} />
                  </div>
                  <h3 className="font-display font-semibold text-white text-sm mb-1.5">
                    {platform.label}
                  </h3>
                  <p className="text-[#64748B] text-xs">{platform.desc}</p>
                </motion.div>
              </ScrollReveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
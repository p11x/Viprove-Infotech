import { Lightbulb, Layers, CheckCircle, Rocket } from 'lucide-react'
import { motion } from 'framer-motion'
import { ScrollReveal } from '../../ui/ScrollReveal'
import { SectionHeader } from '../../ui/SectionHeader'
import { focusAreas } from '../../../data/content'

const iconMap = { Lightbulb, Layers, CheckCircle, Rocket }

export function FocusAreasSection() {
  const safeFocusAreas = focusAreas ?? []

  return (
    <section className="section-padding relative bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeader
            eyebrow="How We Work"
            title="Our Engineering Approach"
            subtitle="Every project follows a proven engineering process."
            centered
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {safeFocusAreas.map((area, i) => {
            const Icon = iconMap[area.icon] ?? Lightbulb
            return (
              <ScrollReveal key={area.title} direction={i % 2 === 0 ? 'left' : 'right'} delay={i * 0.1}>
                <div className="glass-card p-6 rounded-xl flex flex-col h-full">
                  <Icon className="w-12 h-12 text-accent-indigo mb-4" />
                  <h3 className="font-display font-semibold text-lg text-text-primary mb-2">{area.title}</h3>
                  <p className="text-text-secondary text-sm flex-1">{area.desc}</p>
                  <motion.div
                    className="h-0.5 bg-accent-indigo mt-4"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                    style={{ originX: 0 }}
                  />
                </div>
              </ScrollReveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
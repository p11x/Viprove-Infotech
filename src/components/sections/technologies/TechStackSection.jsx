import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Monitor, Server, Cloud, Brain, Smartphone, Shield } from 'lucide-react'
import { ScrollReveal } from '../../ui/ScrollReveal'
import { SectionHeader } from '../../ui/SectionHeader'
import { techCategories } from '../../../data/content'

const iconMap = { Monitor, Server, Cloud, Brain, Smartphone, Shield }

export function TechStackSection() {
  const [activeTab, setActiveTab] = useState(0)
  const safeTechCategories = techCategories ?? []

  const badgeColor = (badge) => {
    if (badge === 'Expert') return 'bg-accent-indigo'
    if (badge === 'Advanced') return 'bg-accent-cyan'
    if (badge === 'Proficient') return 'bg-slate-500'
    if (badge === 'Certified') return 'bg-accent-violet'
    return 'bg-slate-500'
  }

  const activeCategory = safeTechCategories[activeTab] || {}

  return (
    <section className="section-padding relative bg-[#F0F4FF]">
      <div className="absolute inset-0 opacity-10 dot-grid-bg" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeader
            eyebrow="Our Expertise"
            title="Technologies We Master"
            subtitle="Deep expertise across the full software delivery lifecycle."
            centered
          />
        </ScrollReveal>

        <ScrollReveal>
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {safeTechCategories.map((cat, i) => (
              <button
                key={cat.category}
                onClick={() => setActiveTab(i)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeTab === i
                    ? 'bg-accent-indigo text-white'
                    : 'text-text-secondary hover:text-accent-indigo'
                }`}
              >
                {cat.category}
              </button>
            ))}
          </div>
        </ScrollReveal>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 20, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="grid lg:grid-cols-2 gap-12 items-start"
          >
            <div className="space-y-6">
              {activeCategory.techs?.map((tech, i) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.1 }}
                  className="flex items-center justify-between"
                >
                  <div>
                    <div className="font-medium text-text-primary">{tech.name}</div>
                    <div className={`inline-flex px-2 py-0.5 rounded text-xs font-medium ${badgeColor(tech.badge)} text-white`}>
                      {tech.badge}
                    </div>
                  </div>
                  <div className="flex-1 mx-4 h-2 bg-[#E2E8F0] rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${tech.level}%` }}
                      transition={{ duration: 1, delay: i * 0.1 }}
                      className="h-full rounded-full"
                      style={{ backgroundColor: activeCategory.accent }}
                    />
                  </div>
                  <span className="text-text-muted text-sm font-medium w-10 text-right">{tech.level}%</span>
                </motion.div>
              ))}
            </div>

            <div className="lg:sticky lg:top-32">
              <div className="text-center lg:text-left">
                {(() => {
                  const Icon = iconMap[activeCategory.icon] ?? Monitor
                  return (
                    <div
                      className="w-16 h-16 rounded-xl flex items-center justify-center mx-auto lg:mx-0 mb-6"
                      style={{ backgroundColor: `${activeCategory.accent}20` }}
                    >
                      <Icon className="w-8 h-8" style={{ color: activeCategory.accent }} />
                    </div>
                  )
                })()}
                <h3 className="font-display text-2xl font-bold text-text-primary mb-2">
                  {activeCategory.category}
                </h3>
                <p className="text-text-muted mb-4">6 Technologies</p>
                <div className="h-1 w-20 bg-gradient-to-r from-accent-indigo to-accent-cyan rounded-full mb-4 mx-auto lg:mx-0" />
                <p className="text-text-secondary leading-relaxed">
                  {activeCategory.category === 'Frontend' &&
                    'We craft responsive, performant user interfaces with modern frameworks that delight users and scale seamlessly.'}
                  {activeCategory.category === 'Backend' &&
                    'Our backend systems handle millions of requests with robust APIs, scalable databases, and efficient architectures.'}
                  {activeCategory.category === 'Cloud & DevOps' &&
                    'Cloud-native infrastructure with automated pipelines, ensuring reliable deployments and efficient scaling.'}
                  {activeCategory.category === 'AI & Data' &&
                    'Intelligent solutions powered by machine learning models and real-time data processing pipelines.'}
                  {activeCategory.category === 'Mobile' &&
                    'Native and cross-platform mobile applications with intuitive UX and seamless device integration.'}
                  {activeCategory.category === 'Security & QA' &&
                    'Comprehensive security audits and automated testing ensure enterprise-grade reliability and compliance.'}
                </p>
                <a href="/services" className="inline-flex items-center gap-2 text-accent-indigo font-medium mt-4">
                  View Projects <span>→</span>
                </a>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
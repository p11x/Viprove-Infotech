import { AnimatedCounter } from '../../ui/AnimatedCounter'
import { techStats } from '../../../data/content'

export function TechStatsSection() {
  const safeTechStats = techStats ?? []

  return (
    <section className="relative py-20" style={{ background: '#0F172A' }}>
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent-indigo via-accent-violet to-accent-cyan" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-row md:flex-row flex-col md:justify-between gap-8 md:gap-0">
          {safeTechStats.map((stat) => (
            <div key={stat.label} className="flex-1 text-center">
              <div className="font-display text-4xl md:text-4xl text-white mb-2">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-[#94A3B8] text-xs font-semibold uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
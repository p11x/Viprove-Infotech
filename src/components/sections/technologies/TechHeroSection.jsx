import { ChevronRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { Button } from '../../ui/Button'
import { useTheme } from '../../../context/ThemeContext'

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
}

const itemVariants = {
  hidden: { y: 40, opacity: 0 },
  visible: { y: 0, opacity: 1 },
}

export function TechHeroSection() {
  const { isDark } = useTheme()
  const focusList = [
    'Strategy and planning',
    'Design and development',
    'Testing and support',
    'Deployment and monitoring',
  ]
  const heroBg = isDark ? '#0D1929' : '#0F172A'

  return (
    <section
      className="relative min-h-[85vh] flex items-center justify-center overflow-hidden"
      style={{ background: heroBg }}
    >
      <div className="absolute inset-0" style={{ background: heroBg }} />

      <div
        className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(79,70,229,0.25) 0%, transparent 70%)',
          filter: 'blur(80px)',
          animation: 'float 7s ease-in-out infinite',
        }}
      />
      <div
        className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(8,145,178,0.2) 0%, transparent 70%)',
          filter: 'blur(60px)',
          animation: 'float 5s ease-in-out infinite',
        }}
      />

      <div className="absolute inset-0 opacity-15 dot-grid-bg" />

      <svg
        className="absolute top-20 left-10 w-64 h-64 pointer-events-none"
        style={{ animation: 'float 7s ease-in-out infinite' }}
      >
        <polyline
          points="0,50 20,30 40,45 60,20 80,35 100,15 120,40 140,25 160,50 180,30 200,45 220,30"
          fill="none"
          stroke="white"
          strokeWidth="1"
          opacity="0.08"
        />
        <text x="10" y="20" fontSize="10" fill="white" opacity="0.08">57.1%</text>
        <text x="80" y="10" fontSize="10" fill="white" opacity="0.08">80%</text>
        <text x="150" y="25" fontSize="10" fill="white" opacity="0.08">32K</text>
      </svg>

      <svg
        className="absolute top-10 right-10 w-48 h-64 pointer-events-none"
        style={{ animation: 'float 5s ease-in-out infinite' }}
      >
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <rect
            key={i}
            x={i * 10}
            y={60 - (i % 3) * 20}
            width="8"
            height={20 + (i % 3) * 25}
            fill="none"
            stroke="white"
            strokeWidth="1"
            opacity="0.07"
          />
        ))}
      </svg>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className="mb-6 flex">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#4F46E5] text-white text-xs font-mono uppercase tracking-wider bg-gradient-to-r from-indigo-500/20 to-cyan-500/20 bg-size-200 animate-shimmer">
              // TECHNOLOGIES
            </span>
          </motion.div>

          <motion.h1 variants={itemVariants} className="font-display font-bold text-white mb-6" style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)' }}>
            <div>Modern Stacks for</div>
            <div className="gradient-text">Practical Products</div>
          </motion.h1>

          <motion.p variants={itemVariants} className="text-[#94A3B8] text-lg max-w-xl mb-8 text-secondary">
            We build with maintainable, scalable technologies for web, mobile, cloud, and AI-powered products.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-wrap gap-4 mb-16">
            <a href="/contact">
              <Button variant="primary" size="lg" icon={ChevronRight}>
                Get Started
              </Button>
            </a>
            <a href="/services">
              <Button variant="ghost" size="lg" icon={ChevronRight}>
                Our Services
              </Button>
            </a>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        initial={{ x: 60, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="absolute right-16 top-1/2 -translate-y-1/2 hidden lg:block w-72 rounded-2xl p-6"
        style={{
          background: isDark ? 'rgba(34,45,66,0.85)' : 'rgba(15,23,42,0.85)',
          backdropFilter: 'blur(20px)',
          border: '1px solid var(--border)',
        }}
      >
        <h3 className="text-white font-semibold mb-4">Focus Areas</h3>
        <ul className="space-y-3">
          {focusList.map((item, i) => (
            <li key={i} className="flex items-center gap-2 text-sm" style={{ color: isDark ? '#94A3B8' : '#94A3B8' }}>
              <ChevronRight className="w-3 h-3 text-accent-indigo" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </motion.div>
    </section>
  )
}
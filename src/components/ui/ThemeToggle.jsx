import { motion, AnimatePresence } from 'framer-motion'
import { Sun, Moon } from 'lucide-react'
import { useTheme } from '../../context/ThemeContext'

export default function ThemeToggle({ size = 'md' }) {
  const { isDark, toggleTheme } = useTheme()

  const sizes = {
    sm: { track: { width:44, height:24 }, thumb: 18, icon: 11, offset: 22 },
    md: { track: { width:52, height:28 }, thumb: 22, icon: 13, offset: 26 },
  }
  const s = sizes[size]

  return (
    <motion.button
      onClick={toggleTheme}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      title={isDark ? 'Light mode' : 'Dark mode'}
      style={{
        position: 'relative',
        width: s.track.width,
        height: s.track.height,
        borderRadius: 999,
        border: '1.5px solid var(--border-bright)',
        background: isDark
          ? 'linear-gradient(135deg, #818CF8, #22D3EE)'
          : 'linear-gradient(135deg, #C7D2FE, #E0E7FF)',
        cursor: 'pointer',
        outline: 'none',
        padding: 0,
        flexShrink: 0,
      }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.92 }}
      transition={{ duration: 0.15 }}
    >
      <motion.div
        animate={{ x: isDark ? s.offset : 3 }}
        transition={{ type: 'spring', stiffness: 500, damping: 30 }}
        style={{
          position: 'absolute',
          top: '50%',
          translateY: '-50%',
          width: s.thumb,
          height: s.thumb,
          borderRadius: '50%',
          background: '#FFFFFF',
          boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={isDark ? 'moon' : 'sun'}
            initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
            animate={{ rotate: 0, opacity: 1, scale: 1 }}
            exit={{ rotate: 90, opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.2 }}
          >
            {isDark
              ? <Moon size={s.icon} color="#818CF8" strokeWidth={2.5} />
              : <Sun  size={s.icon} color="#F59E0B" strokeWidth={2.5} />
            }
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </motion.button>
  )
}
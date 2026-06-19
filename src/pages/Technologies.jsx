import { motion } from 'framer-motion'
import { TechHeroSection } from '../components/sections/technologies/TechHeroSection'
import { PlatformsGrid } from '../components/sections/technologies/PlatformsGrid'
import { TechStackSection } from '../components/sections/technologies/TechStackSection'
import { FocusAreasSection } from '../components/sections/technologies/FocusAreasSection'
import { TechStatsSection } from '../components/sections/technologies/TechStatsSection'
import { TechCtaSection } from '../components/sections/technologies/TechCtaSection'

export default function Technologies() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
    >
      <TechHeroSection />
      <PlatformsGrid />
      <TechStackSection />
      <FocusAreasSection />
      <TechStatsSection />
      <TechCtaSection />
    </motion.div>
  )
}
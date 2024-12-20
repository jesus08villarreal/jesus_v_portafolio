'use client'

import { motion } from 'framer-motion'
import { technologies } from '../config/technologies'
import TechLogo from './TechLogo'
import { useTranslations } from '../hooks/useTranslations'

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
}

export default function TechSection() {
  const t = useTranslations()

  return (
    <div className="space-y-12">
      {Object.entries(technologies).map(([category, techs]) => (
        <motion.div
          key={category}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={container}
          className="space-y-6"
        >
          <motion.h3 
            className="text-2xl font-bold text-gray-900 dark:text-white capitalize mb-4 flex items-center gap-3"
            variants={item}
          >
            <span className="w-8 h-1 bg-blue-500 rounded-full"></span>
            {t.skills[category].title}
          </motion.h3>
          <motion.div 
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8"
            variants={container}
          >
            {techs.map((tech, index) => (
              <motion.div key={tech.name} variants={item}>
                <TechLogo {...tech} />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      ))}
    </div>
  )
} 
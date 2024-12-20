'use client'

import { motion } from 'framer-motion'
import ProjectCard from './ProjectCard'
import { useTranslations } from '../hooks/useTranslations'
import { projects } from '../config/projects'

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
}

export default function ProjectsSection() {
  const t = useTranslations()

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={container}
          className="space-y-12"
        >
          <div className="text-center">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4"
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0 }
              }}
            >
              {t.projects.title}
            </motion.h2>
            <motion.div 
              className="w-20 h-1 bg-blue-500 mx-auto rounded-full"
              variants={{
                hidden: { width: 0 },
                show: { width: 80 }
              }}
            />
          </div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={container}
          >
            {projects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
} 
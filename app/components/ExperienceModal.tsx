'use client'

import { motion } from 'framer-motion'
import Modal from './Modal'
import { useTranslations } from '../hooks/useTranslations'

interface Project {
  name: string
  description: string
  technologies: string[]
  achievements: string[]
}

interface ExperienceModalProps {
  isOpen: boolean
  onClose: () => void
  company: 'bsd' | 'connectit'
  projects?: Project[]
}

export default function ExperienceModal({ isOpen, onClose, company, projects = [] }: ExperienceModalProps) {
  const t = useTranslations()

  const experience = t.experience[company]

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center ${
        isOpen ? 'visible opacity-100' : 'invisible opacity-0'
      } transition-all duration-300`}
    >
      <div className="fixed inset-0 bg-black bg-opacity-50" onClick={onClose}></div>
      <div className="relative max-h-[90vh] w-[90%] max-w-3xl overflow-y-auto rounded-lg bg-white p-6 shadow-xl dark:bg-gray-800">
        <div className="space-y-6">
          {/* Company Info */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                {experience.company}
              </h4>
              <span className="text-blue-600 dark:text-blue-400">
                {experience.period}
              </span>
            </div>
            <p className="text-gray-600 dark:text-gray-300">
              {experience.description}
            </p>
          </div>

          {/* Technologies Used */}
          <div className="space-y-3">
            <h5 className="font-medium text-gray-900 dark:text-white">
              {t.experience.technologies}
            </h5>
            <div className="flex flex-wrap gap-2">
              {experience.details.map((tech, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className="px-3 py-1 rounded-full text-sm font-medium
                           bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </div>

          {/* Projects */}
          {projects.length > 0 && (
            <div className="space-y-4">
              <h5 className="font-medium text-gray-900 dark:text-white">
                {t.experience.projects}
              </h5>
              <div className="grid gap-4">
                {projects.map((project, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.2 }}
                    className="p-4 rounded-lg bg-gray-50 dark:bg-gray-700/50 space-y-3"
                  >
                    <h6 className="font-medium text-gray-900 dark:text-white">
                      {project.name}
                    </h6>
                    <p className="text-gray-600 dark:text-gray-300">
                      {project.description}
                    </p>
                    <div className="space-y-2">
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-2 py-1 rounded text-xs font-medium
                                     bg-gray-200 text-gray-800 dark:bg-gray-600 dark:text-gray-200"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      <ul className="list-disc list-inside text-gray-600 dark:text-gray-300">
                        {project.achievements.map((achievement, achievementIndex) => (
                          <li key={achievementIndex}>{achievement}</li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {/* Botón de cerrar al final */}
          <div className="mt-8 flex justify-center">
            <button
              onClick={onClose}
              className="px-6 py-2 bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 
                       text-gray-700 dark:text-gray-200 rounded-lg transition-colors duration-200 
                       flex items-center gap-2"
              aria-label="Cerrar"
            >
              <span>Cerrar</span>
              <svg
                className="h-5 w-5"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
} 
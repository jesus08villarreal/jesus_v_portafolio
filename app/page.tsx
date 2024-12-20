'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useTranslations } from './hooks/useTranslations'
import ProfileImage from './components/ProfileImage'
import TechSection from './components/TechSection'
import ProjectsSection from './components/ProjectsSection'
import ContactSection from './components/ContactSection'
import ExperienceModal from './components/ExperienceModal'
import WelcomeModal from './components/WelcomeModal'
import AlienModal from './components/AlienModal'

export default function Home() {
  const t = useTranslations()
  const [selectedCompany, setSelectedCompany] = useState<'bsd' | 'connectit' | null>(null)
  const [isAlienModalOpen, setIsAlienModalOpen] = useState(false)

  useEffect(() => {
    // Verificar si hay un tema guardado en localStorage
    const savedTheme = localStorage.getItem('theme-preference');
    
    // Si no hay tema guardado, establecer 'dark' como predeterminado
    if (!savedTheme) {
      localStorage.setItem('theme-preference', 'dark');
      document.documentElement.classList.remove('light');
      document.documentElement.classList.add('dark');
    } else {
      // Si hay un tema guardado, aplicarlo
      document.documentElement.classList.remove('light', 'dark');
      document.documentElement.classList.add(savedTheme);
    }
  }, []);

  const nameAnimation = {
    initial: { opacity: 0, y: 20 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 1.2,
        ease: [0.6, -0.05, 0.01, 0.99] // Animación suave y profesional
      }
    }
  }

  const gradientAnimation = {
    animate: {
      backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
    },
    transition: {
      duration: 5,
      ease: "linear",
      repeat: Infinity
    }
  }

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-white via-gray-50 to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-black">
      <WelcomeModal />
      {/* Hero Section */}
      <section id="hero" className="w-full min-h-screen flex items-center justify-center">
        <div className="container mx-auto px-4 py-32 md:py-0">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="flex-1 text-center md:text-left space-y-8">
              <motion.div
                className="relative"
                initial="initial"
                animate="animate"
                variants={nameAnimation}
              >
                <motion.h1 
                  className="text-4xl md:text-6xl font-bold relative z-10
                            bg-clip-text text-transparent bg-gradient-to-r 
                            from-blue-600 via-purple-600 to-blue-600 
                            bg-[size:200%]"
                  animate={gradientAnimation.animate}
                  transition={gradientAnimation.transition}
                >
                  Jesús Villarreal
                  <motion.div 
                    className="absolute -inset-2 bg-blue-500/10 rounded-lg blur-xl"
                    animate={{
                      opacity: [0.5, 0.8, 0.5],
                      scale: [1, 1.05, 1],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                </motion.h1>
              </motion.div>
              <motion.h2 
                className="text-2xl md:text-3xl text-gray-700 dark:text-gray-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                {t.hero.title}
              </motion.h2>
              <motion.p
                className="text-lg text-gray-600 dark:text-gray-400 max-w-xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                {t.hero.subtitle}
              </motion.p>
              <motion.div 
                className="flex gap-6 justify-center md:justify-start"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <Link 
                  href="https://github.com/jesus08villarreal" 
                  className="group bg-gray-100 dark:bg-white/10 text-gray-800 dark:text-white px-8 py-3 rounded-lg hover:bg-gray-200 dark:hover:bg-white/20 transition-all duration-300 flex items-center gap-2"
                  target="_blank"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                  GitHub
                </Link>
                <Link 
                  href="https://www.linkedin.com/in/jesus-villarreal-191998224/"
                  className="group bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-all duration-300 flex items-center gap-2"
                  target="_blank"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  LinkedIn
                </Link>
              </motion.div>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex-shrink-0"
            >
              <ProfileImage />
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="w-full py-32 relative">
        <div className="absolute inset-0 bg-gray-100/80 dark:bg-black/30" />
        <div className="container relative mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
                {t.about.title}
              </h2>
              <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full" />
            </div>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative group"
              >
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl opacity-20 group-hover:opacity-30 blur transition duration-300" />
                <div className="relative h-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 border border-gray-200/50 dark:border-white/10">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                    Experiencia Técnica
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    Desarrollador Full-stack con experiencia en tecnologías front-end y back-end, incluyendo HTML, CSS, JavaScript, Vue.js, Python y PHP. Especializado en la gestión de bases de datos SQL y despliegues eficientes con Docker y CI/CD.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative group"
              >
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-blue-500 rounded-xl opacity-20 group-hover:opacity-30 blur transition duration-300" />
                <div className="relative h-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 border border-gray-200/50 dark:border-white/10">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                    Enfoque Profesional
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    Como graduado en Ingeniería en Computación Administrativa, busco contribuir a proyectos innovadores con mi enfoque analítico y capacidad de resolución de problemas, siempre manteniendo las mejores prácticas de desarrollo.
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="w-full py-32 relative">
        <div className="absolute inset-0 bg-gray-200/50 dark:bg-black/40" />
        <div className="container relative mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-900 dark:text-white">
            {t.experience.title}
          </h2>
          <div className="max-w-4xl mx-auto space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white/80 dark:bg-white/10 backdrop-blur-sm p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={() => setSelectedCompany('bsd')}
            >
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                {t.experience.bsd.title}
              </h3>
              <p className="text-blue-600 dark:text-blue-400 mb-4">
                {t.experience.bsd.company} - {t.experience.bsd.period}
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                {t.experience.bsd.description}
              </p>
              <button
                className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 transition-colors duration-200 flex items-center gap-2"
                onClick={() => setSelectedCompany('bsd')}
              >
                {t.experience.viewMore}
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white/80 dark:bg-white/10 backdrop-blur-sm p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={() => setSelectedCompany('connectit')}
            >
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                {t.experience.connectit.title}
              </h3>
              <p className="text-blue-600 dark:text-blue-400 mb-4">
                {t.experience.connectit.company} - {t.experience.connectit.period}
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                {t.experience.connectit.description}
              </p>
              <button
                className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 transition-colors duration-200 flex items-center gap-2"
                onClick={() => setSelectedCompany('connectit')}
              >
                {t.experience.viewMore}
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="w-full py-32 relative">
        <div className="absolute inset-0 bg-gray-50/80 dark:bg-black/20" />
        <div className="container relative mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center text-gray-900 dark:text-white">
            {t.skills.title}
          </h2>
          <TechSection />
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="w-full py-32 relative">
        <div className="absolute inset-0 bg-gray-100/80 dark:bg-black/30" />
        <div className="relative">
          <ProjectsSection />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="w-full py-32 relative">
        <div className="absolute inset-0 bg-gray-200/50 dark:bg-black/40" />
        <div className="relative">
          <ContactSection />
        </div>
      </section>

      {/* Experience Modals */}
      <ExperienceModal
        isOpen={selectedCompany === 'bsd'}
        onClose={() => setSelectedCompany(null)}
        company="bsd"
        projects={t.experience.bsd.projects.map(p => ({
          ...p,
          technologies: [...p.technologies],
          achievements: [...p.achievements]
        }))}
      />
      <ExperienceModal
        isOpen={selectedCompany === 'connectit'}
        onClose={() => setSelectedCompany(null)}
        company="connectit"
        projects={t.experience.connectit.projects.map(p => ({
          ...p,
          technologies: [...p.technologies],
          achievements: [...p.achievements]
        }))}
      />

      <footer className="w-full py-8 text-center text-gray-600 dark:text-gray-400">
        <p>
          {t.footer.developedBy}{' '}
          <span 
            className="cursor-pointer hover:text-blue-500 transition-colors"
            onClick={() => setIsAlienModalOpen(true)}
          >
            Jesús Villarreal
          </span>
        </p>
      </footer>

      <AlienModal 
        isOpen={isAlienModalOpen}
        onClose={() => setIsAlienModalOpen(false)}
      />
    </main>
  )
}

'use client'

import { motion } from 'framer-motion'
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

export default function ContactSection() {
  const t = useTranslations()

  return (
    <div className="container mx-auto px-4">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={container}
        className="max-w-5xl mx-auto"
      >
        {/* Encabezado */}
        <div className="text-center space-y-4 mb-16">
          <motion.h2 
            variants={item}
            className="text-4xl md:text-5xl font-bold"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-blue-700 dark:from-blue-400 dark:to-blue-600">
              {t.contact.connect}
            </span>
          </motion.h2>
          <motion.div 
            variants={item}
            className="w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-700 dark:from-blue-400 dark:to-blue-600 mx-auto rounded-full"
          />
          <motion.p
            variants={item}
            className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
          >
            {t.contact.description}
          </motion.p>
        </div>

        {/* Tarjetas de contacto */}
        <motion.div 
          variants={container}
          className="grid md:grid-cols-3 gap-8 mb-16"
        >
          {/* Email */}
          <motion.a
            href="mailto:jesusvs1100@gmail.com"
            variants={item}
            whileHover={{ y: -8 }}
            className="group relative p-8 rounded-2xl overflow-hidden transition-all duration-300"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/80 to-gray-100/80 dark:from-blue-500/10 dark:to-blue-600/10 backdrop-blur-sm border border-gray-200/50 dark:border-white/10 
                         group-hover:border-blue-500/50 transition-all duration-300" />
            <div className="relative flex flex-col items-center gap-4">
              <div className="p-4 rounded-full bg-blue-100/80 dark:bg-blue-500/10 group-hover:bg-blue-200/80 dark:group-hover:bg-blue-500/20 transition-all duration-300">
                <svg className="w-8 h-8 text-blue-600 dark:text-blue-400 group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-300 transition-colors">
                  {t.contact.email}
                </h3>
                <p className="text-blue-600 dark:text-blue-400 group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors">
                  jesusvs1100@gmail.com
                </p>
              </div>
            </div>
          </motion.a>

          {/* Teléfono */}
          <motion.div
            variants={item}
            whileHover={{ y: -8 }}
            className="group relative p-8 rounded-2xl overflow-hidden transition-all duration-300"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/80 to-gray-100/80 dark:from-blue-500/10 dark:to-blue-600/10 backdrop-blur-sm border border-gray-200/50 dark:border-white/10 
                         group-hover:border-blue-500/50 transition-all duration-300" />
            <div className="relative flex flex-col items-center gap-4">
              <div className="p-4 rounded-full bg-blue-100/80 dark:bg-blue-500/10 group-hover:bg-blue-200/80 dark:group-hover:bg-blue-500/20 transition-all duration-300">
                <svg className="w-8 h-8 text-blue-600 dark:text-blue-400 group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-300 transition-colors">
                  {t.contact.phone}
                </h3>
                <p className="text-blue-600 dark:text-blue-400 group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors">
                  +52 81 2037 9786
                </p>
              </div>
            </div>
          </motion.div>

          {/* Ubicación */}
          <motion.div
            variants={item}
            whileHover={{ y: -8 }}
            className="group relative p-8 rounded-2xl overflow-hidden transition-all duration-300"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/80 to-gray-100/80 dark:from-blue-500/10 dark:to-blue-600/10 backdrop-blur-sm border border-gray-200/50 dark:border-white/10 
                         group-hover:border-blue-500/50 transition-all duration-300" />
            <div className="relative flex flex-col items-center gap-4">
              <div className="p-4 rounded-full bg-blue-100/80 dark:bg-blue-500/10 group-hover:bg-blue-200/80 dark:group-hover:bg-blue-500/20 transition-all duration-300">
                <svg className="w-8 h-8 text-blue-600 dark:text-blue-400 group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-300 transition-colors">
                  {t.contact.location}
                </h3>
                <p className="text-blue-600 dark:text-blue-400 group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors">
                  Monterrey, Nuevo León
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Redes sociales */}
        <motion.div
          variants={container}
          className="flex justify-center gap-6"
        >
          <motion.a
            href="https://github.com/jesus08villarreal"
            target="_blank"
            rel="noopener noreferrer"
            variants={item}
            whileHover={{ y: -5, scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="group relative p-4 rounded-xl overflow-hidden transition-all duration-300"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-gray-100/80 to-gray-200/80 dark:from-gray-800/50 dark:to-gray-900/50 backdrop-blur-sm border border-gray-200/50 dark:border-white/10 
                         group-hover:border-blue-500/50 transition-all duration-300" />
            <svg className="relative w-6 h-6 text-gray-600 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
            </svg>
          </motion.a>
          <motion.a
            href="https://linkedin.com/in/jesus-villarreal-191998224"
            target="_blank"
            rel="noopener noreferrer"
            variants={item}
            whileHover={{ y: -5, scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="group relative p-4 rounded-xl overflow-hidden transition-all duration-300"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-gray-100/80 to-gray-200/80 dark:from-gray-800/50 dark:to-gray-900/50 backdrop-blur-sm border border-gray-200/50 dark:border-white/10 
                         group-hover:border-blue-500/50 transition-all duration-300" />
            <svg className="relative w-6 h-6 text-gray-600 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </motion.a>
        </motion.div>

        {/* Footer */}
        <motion.div
          variants={item}
          className="text-center mt-16 pt-8 border-t border-gray-200/50 dark:border-white/10"
        >
          <p className="text-sm text-gray-500 dark:text-gray-400">
            © {new Date().getFullYear()} Jesús Villarreal. All rights reserved.
          </p>
        </motion.div>
      </motion.div>
    </div>
  )
}
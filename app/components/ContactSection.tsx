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
    <section className="py-20 bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={container}
          className="max-w-4xl mx-auto text-center space-y-12"
        >
          <div className="space-y-4">
            <motion.h2 
              className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600"
              variants={item}
            >
              {t.contact.connect}
            </motion.h2>
            <motion.p
              className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed"
              variants={item}
            >
              {t.contact.description}
            </motion.p>
          </div>

          <motion.div 
            className="grid md:grid-cols-3 gap-8"
            variants={container}
          >
            <motion.a
              href="mailto:jesusvs1100@gmail.com"
              className="group p-8 bg-gradient-to-br from-white/5 to-white/10 rounded-xl 
                       backdrop-blur-sm border border-white/10 hover:border-blue-500/50
                       transition-all duration-300 hover:-translate-y-2"
              variants={item}
            >
              <div className="flex flex-col items-center gap-4">
                <span className="text-5xl group-hover:scale-110 transition-transform duration-300">📧</span>
                <div>
                  <h3 className="font-medium text-xl mb-2">{t.contact.email}</h3>
                  <p className="text-blue-400 group-hover:text-blue-300 transition-colors">
                    jesusvs1100@gmail.com
                  </p>
                </div>
              </div>
            </motion.a>

            <motion.div
              className="group p-8 bg-gradient-to-br from-white/5 to-white/10 rounded-xl 
                       backdrop-blur-sm border border-white/10 hover:border-blue-500/50
                       transition-all duration-300 hover:-translate-y-2"
              variants={item}
            >
              <div className="flex flex-col items-center gap-4">
                <span className="text-5xl group-hover:scale-110 transition-transform duration-300">📱</span>
                <div>
                  <h3 className="font-medium text-xl mb-2">{t.contact.phone}</h3>
                  <p className="text-blue-400 group-hover:text-blue-300 transition-colors">
                    +52 81 2037 9786
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="group p-8 bg-gradient-to-br from-white/5 to-white/10 rounded-xl 
                       backdrop-blur-sm border border-white/10 hover:border-blue-500/50
                       transition-all duration-300 hover:-translate-y-2"
              variants={item}
            >
              <div className="flex flex-col items-center gap-4">
                <span className="text-5xl group-hover:scale-110 transition-transform duration-300">📍</span>
                <div>
                  <h3 className="font-medium text-xl mb-2">{t.contact.location}</h3>
                  <p className="text-blue-400 group-hover:text-blue-300 transition-colors">
                    Monterrey, Nuevo León
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            className="flex justify-center gap-6 pt-8"
            variants={container}
          >
            <motion.a
              href="https://github.com/jesus08villarreal"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-white/5 hover:bg-white/10 rounded-full 
                       transition-all duration-300 hover:-translate-y-1
                       text-gray-400 hover:text-white"
              variants={item}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/jesus-villarreal"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-white/5 hover:bg-white/10 rounded-full 
                       transition-all duration-300 hover:-translate-y-1
                       text-gray-400 hover:text-white"
              variants={item}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
} 
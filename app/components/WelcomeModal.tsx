'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Modal from './Modal'

export default function WelcomeModal() {
  const [isOpen, setIsOpen] = useState(false)
  const [timeLeft, setTimeLeft] = useState(10)

  useEffect(() => {
    const hasVisited = localStorage.getItem('hasVisited')
    
    if (!hasVisited) {
      const timer = setTimeout(() => {
        setIsOpen(true)
        localStorage.setItem('hasVisited', 'true')
      }, 1000)

      return () => clearTimeout(timer)
    }
  }, [])

  useEffect(() => {
    if (isOpen && timeLeft > 0) {
      const timer = setInterval(() => {
        setTimeLeft(prev => prev - 1)
      }, 1000)

      return () => clearInterval(timer)
    } else if (timeLeft === 0) {
      setIsOpen(false)
    }
  }, [isOpen, timeLeft])

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        bounce: 0.6
      }
    }
  }

  return (
    <Modal
      isOpen={isOpen}
      onClose={() => setIsOpen(false)}
      title="¡Bienvenido/a!"
    >
      <motion.div 
        className="space-y-6 relative max-h-[60vh]"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.div
          className="absolute -top-10 -left-10 w-20 h-20 bg-blue-500/20 rounded-full blur-xl"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute -bottom-10 -right-10 w-20 h-20 bg-purple-500/20 rounded-full blur-xl"
          animate={{
            scale: [1, 1.5, 1],
            rotate: [0, -90, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        <motion.div 
          variants={item}
          className="relative text-center"
        >
          <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
            ¡Bienvenido!
          </h2>
        </motion.div>

        <motion.p 
          variants={item}
          className="text-gray-600 dark:text-gray-300 relative z-10"
        >
          ¡Gracias por visitar mi portafolio! Aquí encontrarás información sobre mis proyectos,
          experiencia y habilidades técnicas.
        </motion.p>

        <motion.p 
          variants={item}
          className="text-gray-600 dark:text-gray-300 relative z-10"
        >
          No dudes en explorar y contactarme si tienes alguna pregunta.
        </motion.p>

        <motion.div
          variants={item}
          className="flex flex-col items-center gap-4 pt-4"
        >
          <motion.button
            onClick={() => setIsOpen(false)}
            className="px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg
                     hover:from-blue-600 hover:to-purple-700 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            ¡Empezar a Explorar!
          </motion.button>

          <motion.div 
            className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <span className="text-xs">Cerrando en:</span>
            <motion.div
              className="w-20 h-1.5 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden"
            >
              <motion.div
                className="h-full bg-gradient-to-r from-blue-500 to-purple-600"
                initial={{ width: '100%' }}
                animate={{ width: `${(timeLeft / 10) * 100}%` }}
                transition={{ duration: 1, ease: "linear" }}
              />
            </motion.div>
            <motion.span
              animate={{
                scale: timeLeft <= 3 ? [1, 1.2, 1] : 1,
                color: timeLeft <= 3 ? '#ef4444' : '#6366f1',
              }}
              transition={{ duration: 0.5, repeat: timeLeft <= 3 ? Infinity : 0 }}
            >
              {timeLeft}s
            </motion.span>
          </motion.div>
        </motion.div>
      </motion.div>
    </Modal>
  )
} 
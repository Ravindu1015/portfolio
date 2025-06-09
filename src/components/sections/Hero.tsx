'use client'

import * as React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Twitter } from 'lucide-react'

const socialLinks = [
  {
    name: 'GitHub',
    href: 'https://github.com/ravindu-chandrarathna',
    icon: Github,
  },
  {
    name: 'LinkedIn',
    href: 'https://linkedin.com/in/ravindu-chandrarathna',
    icon: Linkedin,
  },
  {
    name: 'Twitter',
    href: 'https://twitter.com/ravindu1015',
    icon: Twitter,
  },
  {
    name: 'Email',
    href: 'mailto:ravinduchan15@gmail.com',
    icon: Mail,
  },
]

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white">
              Hi, I'm{' '}
              <span className="text-blue-600 dark:text-blue-400">
                Ravindu Chandrarathna
              </span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-gray-600 dark:text-gray-300">
              Software Engineer & Product Manager & Buiness Analyst
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl">
              Dynamic and results-driven Software Engineering undergraduate at
              Sabaragamuwa University of Sri Lanka, specializing in product
              management, software development, and cybersecurity.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
                  aria-label={link.name}
                >
                  <link.icon className="h-6 w-6" />
                </a>
              ))}
            </div>
            <div className="pt-4">
              <a
                href="#contact"
                className="inline-flex items-center px-6 py-3 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors"
              >
                Get in Touch
              </a>
            </div>
          </motion.div>
          
          <motion.div
  initial={{ opacity: 0, scale: 0.8 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.5, delay: 0.2 }}
  className="relative h-64 w-64 lg:h-80 lg:w-80 group mx-auto"
>
  {/* Gradient backgrounds with hover rotation */}
  <motion.div
    className="absolute inset-0 rounded-2xl pointer-events-none"
    whileHover={{ rotate: 8 }}
    transition={{ type: "spring", stiffness: 100, damping: 10 }}
  >
    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl transform rotate-3" />
    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl transform -rotate-3" />
  </motion.div>
  {/* Profile image */}
  <div className="relative h-full w-full rounded-2xl overflow-hidden">
    <Image
      src="/profile.jpg"
      alt="Ravindu Chandrarathna"
      fill
      sizes="256px"
      className="object-cover"
      priority
    />
  </div>
</motion.div>


        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="text-gray-400 dark:text-gray-600"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </motion.div>
      </div>
    </section>
  )
} 
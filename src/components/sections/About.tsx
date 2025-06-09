'use client'

import * as React from 'react'
import { motion } from 'framer-motion'

export function About() {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-8">
            About Me
          </h2>
          
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              I am a dynamic and results-driven Software Engineering undergraduate at
              Sabaragamuwa University of Sri Lanka, with a passion for product
              management, software development, and cybersecurity. My journey in
              technology has equipped me with a unique blend of technical expertise
              and leadership skills.
            </p>
            
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Currently in my 4th year of studies with a GPA of 3.4, I have
              demonstrated excellence in both academic and practical applications
              of software engineering. My experience spans across full-stack
              development, product lifecycle management, and cybersecurity,
              allowing me to approach problems with a comprehensive perspective.
            </p>
            
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Beyond my technical skills, I am actively involved in various
              leadership roles, including serving as the Treasurer of the Society
              of Computer Sciences at Sabaragamuwa University and as a Committee
              Member of IEEE Sri Lanka PES Chapter. These experiences have
              honed my abilities in team collaboration, stakeholder management,
              and strategic planning.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  Education
                </h3>
                <ul className="space-y-3">
                  <li className="text-gray-600 dark:text-gray-300">
                    <span className="font-medium">BScHons (SE)</span>
                    <br />
                    Sabaragamuwa University of Sri Lanka
                    <br />
                    <span className="text-sm text-gray-500">2022 - Present</span>
                  </li>
                  <li className="text-gray-600 dark:text-gray-300">
                    <span className="font-medium">Diploma in Cybersecurity</span>
                    <br />
                    SITC Campus - Colombo
                    <br />
                    <span className="text-sm text-gray-500">2023</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  Current Roles
                </h3>
                <ul className="space-y-3">
                  <li className="text-gray-600 dark:text-gray-300">
                    <span className="font-medium">Treasurer</span>
                    <br />
                    Society of Computer Sciences
                    <br />
                    <span className="text-sm text-gray-500">2024 - Present</span>
                  </li>
                  <li className="text-gray-600 dark:text-gray-300">
                    <span className="font-medium">Committee Member</span>
                    <br />
                    IEEE Power and Energy Society
                    <br />
                    <span className="text-sm text-gray-500">2024 - 2025</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 
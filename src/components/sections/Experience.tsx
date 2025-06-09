'use client'

import * as React from 'react'
import { motion } from 'framer-motion'
import { Briefcase, GraduationCap, Users } from 'lucide-react'

const experiences = [
  {
    title: 'Treasurer',
    company: 'Society of Computer Sciences',
    location: 'Sabaragamuwa University of Sri Lanka',
    period: 'May 2024 - Present',
    description: [
      'Managing financial transactions and budgets for the Society of Computer Sciences',
      'Implementing financial strategies to ensure smooth operation of the society',
      'Maximizing funds for events and activities',
    ],
    icon: Users,
  },
  {
    title: 'Committee Member',
    company: 'IEEE Power and Energy Society',
    location: 'Sri Lanka Section',
    period: 'Feb 2024 - Feb 2025',
    description: [
      'Serving as a Committee Member of IEEE Sri Lanka PES Chapter 2024',
      'Driving innovation in power and energy systems',
      'Collaborating with industry experts and contributing to impactful projects',
    ],
    icon: Users,
  },
  {
    title: 'Lobby Manager, Teller, Internship Trainee',
    company: 'Peoples Bank of Sri Lanka',
    location: 'Beruwala Branch',
    period: 'May 2021 - Aug 2022',
    description: [
      'Responsible for handling customers and reducing customer queues as Lobby Manager',
      'Worked on counter services and cleared cheques',
      'Helped with opening accounts after getting customer requirements',
    ],
    icon: Briefcase,
  },
  {
    title: 'IEEE SL SYW Congress 2023 Organizing Committee',
    company: 'IEEE and IEEE Sabaragamuwa Section',
    location: 'SL and SUSL',
    period: 'Aug 2022 - Present',
    description: [
      'Actively involved in IEEE initiatives to foster professional growth',
      'Successfully managed sponsorship outreach for IEEE SL SYW Congress 2023',
      'Secured corporate partnerships while advocating for inclusivity and innovation',
    ],
    icon: Users,
  },
]

export function Experience() {
  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-12">
            Experience
          </h2>
          
          <div className="space-y-8">
            {experiences.map((experience, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative pl-8 sm:pl-32 py-6 group"
              >
                <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-0 sm:before:left-0 before:h-full before:px-px before:bg-gray-200 dark:before:bg-gray-700 before:ml-0.5 sm:before:ml-[3.25rem] before:self-start before:-translate-x-1/2 before:from-blue-500 before:via-blue-500 before:to-transparent before:from-blue-500 before:via-blue-500 before:to-transparent before:from-blue-500 before:via-blue-500 before:to-transparent">
                  <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-blue-600 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">
                    {experience.period}
                  </time>
                  <div className="text-xl font-bold text-gray-900 dark:text-white">
                    {experience.title}
                  </div>
                </div>
                <div className="text-gray-600 dark:text-gray-300 mb-2">
                  {experience.company} • {experience.location}
                </div>
                <ul className="text-gray-600 dark:text-gray-400 space-y-2">
                  {experience.description.map((item, i) => (
                    <li key={i} className="flex items-start">
                      <span className="flex h-6 items-center sm:h-7">
                        <svg
                          className="h-2.5 w-2.5 text-blue-600 dark:text-blue-400 mr-2"
                          fill="currentColor"
                          viewBox="0 0 8 8"
                        >
                          <circle cx="4" cy="4" r="3" />
                        </svg>
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
} 
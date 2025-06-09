'use client'

import * as React from 'react'
import { motion } from 'framer-motion'
import {
  Code2,
  Database,
  Globe,
  Layout,
  MessageSquare,
  Shield,
  Users,
  Workflow,
} from 'lucide-react'

const technicalSkills = [
  {
    category: 'Programming Languages',
    skills: ['Java', 'Python', 'C', 'PHP'],
    icon: Code2,
  },
  {
    category: 'Frameworks',
    skills: ['React', 'Angular', 'Laravel'],
    icon: Layout,
  },
  {
    category: 'Databases',
    skills: ['MySQL', 'MongoDB', 'Firestore'],
    icon: Database,
  },
  {
    category: 'Technologies',
    skills: ['Machine Learning', 'Cybersecurity'],
    icon: Shield,
  },
  {
    category: 'Tools',
    skills: ['Git', 'VS Code', 'IntelliJ IDEA', 'Postman', 'Jira', 'Trello', 'Asana'],
    icon: Workflow,
  },
]

const softSkills = [
  {
    category: 'Leadership & Team Collaboration',
    icon: Users,
  },
  {
    category: 'Communication & Presentation',
    icon: MessageSquare,
  },
  {
    category: 'Problem-Solving',
    icon: Globe,
  },
  {
    category: 'Critical Thinking',
    icon: Workflow,
  },
  {
    category: 'Stakeholder Management',
    icon: Users,
  },
  {
    category: 'Adaptability & Time Management',
    icon: Workflow,
  },
  {
    category: 'Agile Methodologies',
    icon: Workflow,
  },
]

export function Skills() {
  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-12">
            Skills
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Technical Skills */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Technical Skills
              </h3>
              <div className="space-y-6">
                {technicalSkills.map((skillGroup, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm"
                  >
                    <div className="flex items-center mb-4">
                      <skillGroup.icon className="h-6 w-6 text-blue-600 dark:text-blue-400 mr-3" />
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                        {skillGroup.category}
                      </h4>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {skillGroup.skills.map((skill, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 text-sm font-medium text-blue-600 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            
            {/* Soft Skills */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Soft Skills
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {softSkills.map((skill, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm"
                  >
                    <div className="flex items-center">
                      <skill.icon className="h-5 w-5 text-blue-600 dark:text-blue-400 mr-3" />
                      <span className="text-gray-900 dark:text-white">
                        {skill.category}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 
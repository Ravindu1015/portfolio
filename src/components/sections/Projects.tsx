'use client'

import * as React from 'react'
import { motion } from 'framer-motion'
import { Github, ExternalLink } from 'lucide-react'

const projects = [
  {
    title: 'Apeksha Hospital - Endoscopy Unit Patient Record System',
    description:
      'Developing a digital patient record system for Endoscopy Unit of Apeksha Hospital to streamline medical record management, ensuring efficient patient tracking, appointment scheduling, and secure data handling.',
    technologies: ['Next.js', 'Tailwind CSS', 'Vercel'],
    period: 'Mar 2025 - Ongoing',
    role: 'Team Leader & Frontend Developer',
    link: 'https://apeksha-drab.vercel.app/',
    github: 'https://github.com/Ravindu1015/apeksha',
  },
  {
    title: 'VoluntHeart',
    description:
      'Built a volunteer management platform to connect volunteers with organizations in Sri Lanka, addressing community needs such as food, shelter, healthcare, and education.',
    technologies: ['React.js', 'Firebase', 'Tailwind CSS', 'Bootstrap'],
    period: 'Mar 2024 - Jul 2024',
    role: 'Team Leader & Frontend Developer',
    link: 'https://github.com/Ravindu1015/Web-Project-VoluntHeart-.git',
    github: 'https://github.com/Ravindu1015/Web-Project-VoluntHeart-.git',
  },
  {
    title: 'Profile2Career',
    description:
      'Developed a web-based platform that provides career recommendations and job sourcing by leveraging machine learning to analyze user profiles, qualifications, and work experience.',
    technologies: ['React.js', 'Machine Learning'],
    period: 'Jul 2024 - Jan 2025',
    role: 'Team Leader & Frontend Developer',
    link: 'https://github.com/Ravindu1015/project-group-01.git',
    github: 'https://github.com/Ravindu1015/project-group-01.git',
  },
]

export function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-12">
            Projects
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow"
              >
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      {project.title}
                    </h3>
                    <div className="flex space-x-2">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
                          aria-label="GitHub repository"
                        >
                          <Github className="h-5 w-5" />
                        </a>
                      )}
                      {project.link && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
                          aria-label="Live demo"
                        >
                          <ExternalLink className="h-5 w-5" />
                        </a>
                      )}
                    </div>
                  </div>
                  
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {project.description}
                  </p>
                  
                  <div className="space-y-4">
                    <div>
                      <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                        Period:
                      </span>
                      <p className="text-gray-600 dark:text-gray-300">
                        {project.period}
                      </p>
                    </div>
                    
                    <div>
                      <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                        Role:
                      </span>
                      <p className="text-gray-600 dark:text-gray-300">
                        {project.role}
                      </p>
                    </div>
                    
                    <div>
                      <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                        Technologies:
                      </span>
                      <div className="flex flex-wrap gap-2 mt-1">
                        {project.technologies.map((tech, i) => (
                          <span
                            key={i}
                            className="px-2 py-1 text-xs font-medium text-blue-600 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
} 
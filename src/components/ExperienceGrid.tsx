import { motion } from 'framer-motion'
import type { Experience } from '@/data/services'

interface ExperienceGridProps {
  experiences: Experience[]
}

export default function ExperienceGrid({ experiences }: ExperienceGridProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {experiences.map((exp, index) => {
        const Icon = exp.icon
        return (
          <motion.div
            key={exp.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="group relative p-6 rounded-2xl border border-dark-700/50 bg-dark-800/30 backdrop-blur-sm hover:bg-dark-800/70 hover:border-primary-500/30 transition-all duration-500 overflow-hidden"
          >
            {/* Hover glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary-500/0 to-transparent group-hover:from-primary-500/5 transition-all duration-500 rounded-2xl pointer-events-none" />

            <div className="relative">
              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-primary-500/10 text-primary-500 mb-4 group-hover:bg-primary-500 group-hover:text-dark-950 group-hover:shadow-lg group-hover:shadow-primary-500/20 transition-all duration-300">
                <Icon size={24} />
              </div>
              <h3 className="text-base font-semibold text-white mb-2 group-hover:text-primary-50 transition-colors">
                {exp.title}
              </h3>
              <p className="text-sm text-dark-400 leading-relaxed group-hover:text-dark-300 transition-colors">
                {exp.description}
              </p>
            </div>
          </motion.div>
        )
      })}
    </div>
  )
}

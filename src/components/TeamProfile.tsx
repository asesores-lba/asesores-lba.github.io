import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { GraduationCap, Briefcase, Award } from 'lucide-react'
import type { TeamMember } from '@/data/team'
import Timeline from './Timeline'

interface TeamProfileProps {
  member: TeamMember
  index: number
}

export default function TeamProfile({ member, index }: TeamProfileProps) {
  const [activeTab, setActiveTab] = useState<'education' | 'experience'>('education')

  const tabs = [
    { key: 'education' as const, label: 'Formación', icon: GraduationCap },
    { key: 'experience' as const, label: 'Experiencia', icon: Briefcase },
  ]

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.12 }}
      className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
    >
      <div className="md:flex">
        {/* Photo + basic info */}
        <div className="md:w-64 shrink-0 bg-gradient-to-b from-dark-50 to-white p-6 flex flex-col items-center text-center border-b md:border-b-0 md:border-r border-dark-100">
          <div className="relative mb-4">
            <img
              src={member.photo}
              alt={member.name}
              loading="lazy"
              className="w-45 h-45 rounded-full object-cover border-4 border-white shadow-md"
            />
            <div className="absolute -bottom-1 -right-1 w-8 h-8 rounded-full bg-primary-500 flex items-center justify-center shadow-sm">
              <Award size={14} className="text-dark-950" />
            </div>
          </div>

          <h3 className="text-lg font-bold text-dark-900 leading-tight">{member.name}</h3>
          <p className="text-primary-600 font-medium text-xs mt-1">{member.role}</p>

          <div className="mt-2 px-3 py-1 bg-primary-500/10 rounded-full">
            <span className="text-xs font-semibold text-primary-700">
              {member.yearsExperience} años de exp.
            </span>
          </div>

          <p className="text-xs text-dark-500 mt-4 leading-relaxed">{member.bio}</p>

          <div className="mt-4 flex flex-wrap gap-1.5 justify-center">
            {member.specializations.map((spec) => (
              <span
                key={spec}
                className="px-2 py-0.5 bg-dark-100 text-dark-600 rounded-full text-xs"
              >
                {spec}
              </span>
            ))}
          </div>
        </div>

        {/* Timeline tabs */}
        <div className="flex-1 p-6">
          <div className="flex gap-2 mb-6 border-b border-dark-100 pb-4">
            {tabs.map((tab) => {
              const Icon = tab.icon
              const isActive = activeTab === tab.key
              return (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key)}
                  className={`relative flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? 'bg-primary-500 text-white shadow-sm shadow-primary-500/30'
                      : 'text-dark-500 hover:text-dark-800 hover:bg-dark-50'
                  }`}
                >
                  <Icon size={15} />
                  {tab.label}
                </button>
              )
            })}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
            >
              <Timeline
                entries={activeTab === 'education' ? member.education : member.workExperience}
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  )
}

import { motion } from 'framer-motion'
import { Target, Eye } from 'lucide-react'
import SectionHeading from '@/components/ui/SectionHeading'
import TeamProfile from '@/components/TeamProfile'
import { company } from '@/data/company'
import { team } from '@/data/team'

export default function AboutPage() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="relative section-padding bg-dark-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-primary-500 font-medium text-sm uppercase tracking-widest mb-3">
                Sobre nosotros
              </p>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                ¿Quiénes Somos?
              </h1>
              <p className="text-dark-400 text-lg leading-relaxed">
                {company.description}
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <img
                src="/assets/img/about-4.png"
                alt="Sobre Asesores LBA"
                className="rounded-2xl shadow-2xl w-full object-cover max-h-120"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-dark-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-dark-800/50 rounded-2xl border border-dark-700 p-8"
            >
              <div className="w-12 h-12 rounded-xl bg-primary-500/10 flex items-center justify-center mb-5">
                <Target size={24} className="text-primary-500" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Misión</h3>
              <p className="text-dark-400 leading-relaxed">{company.mission}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="bg-dark-800/50 rounded-2xl border border-dark-700 p-8"
            >
              <div className="w-12 h-12 rounded-xl bg-primary-500/10 flex items-center justify-center mb-5">
                <Eye size={24} className="text-primary-500" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Visión</h3>
              <p className="text-dark-400 leading-relaxed">{company.vision}</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-padding bg-dark-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Nuestro Equipo"
            subtitle="Profesionales comprometidos con tu éxito"
            light
          />
          <div className="space-y-8">
            {team.map((member, i) => (
              <TeamProfile key={member.name} member={member} index={i} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

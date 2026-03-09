import { motion } from 'framer-motion'
import { Clock, Mail, Phone } from 'lucide-react'
import { company } from '@/data/company'

export default function ScheduleTable() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* Schedule */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="bg-dark-800/50 rounded-2xl border border-dark-700 p-6"
      >
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-lg bg-primary-500/10 flex items-center justify-center">
            <Clock size={20} className="text-primary-500" />
          </div>
          <h3 className="text-lg font-semibold text-white">
            Horarios de Atención
          </h3>
        </div>
        <div className="space-y-0">
          {company.schedule.map((item, i) => (
            <div
              key={item.day}
              className={`flex justify-between py-3 px-4 rounded-lg text-sm ${
                i % 2 === 0 ? 'bg-dark-800/50' : ''
              }`}
            >
              <span className="text-dark-300 font-medium">{item.day}</span>
              <span
                className={
                  item.isClosed
                    ? 'text-primary-500 font-semibold'
                    : 'text-dark-400'
                }
              >
                {item.time}
              </span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Contact quick info */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="bg-dark-800/50 rounded-2xl border border-dark-700 p-6 flex flex-col justify-center"
      >
        <div className="text-center mb-6">
          <img
            src="/assets/img/logo.png"
            alt="Asesores LBA"
            className="h-20 w-auto mx-auto mb-4"
          />
        </div>
        <div className="space-y-4">
          <a
            href={`mailto:${company.contact.emails[0]}`}
            className="flex items-center gap-3 p-4 rounded-xl bg-dark-800 hover:bg-dark-700 transition-colors group"
          >
            <Mail size={20} className="text-primary-500" />
            <span className="text-dark-300 group-hover:text-white transition-colors text-sm">
              {company.contact.emails[0]}
            </span>
          </a>
          {company.contact.phones.map((phone) => (
            <a
              key={phone}
              href={`tel:${phone}`}
              className="flex items-center gap-3 p-4 rounded-xl bg-dark-800 hover:bg-dark-700 transition-colors group"
            >
              <Phone size={20} className="text-primary-500" />
              <span className="text-dark-300 group-hover:text-white transition-colors text-sm">
                {phone}
              </span>
            </a>
          ))}
        </div>
      </motion.div>
    </div>
  )
}

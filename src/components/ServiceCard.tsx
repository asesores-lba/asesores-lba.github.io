import { motion } from 'framer-motion'
import { CheckCircle } from 'lucide-react'
import type { ServiceCategory } from '@/data/services'

interface ServiceCardProps {
  service: ServiceCategory
  index: number
}

export default function ServiceCard({ service, index }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow"
    >
      <h3 className="text-lg font-bold text-dark-900 mb-4 pb-3 border-b border-dark-100">
        {service.category}
      </h3>
      <ul className="space-y-2.5">
        {service.items.map((item) => (
          <li key={item} className="flex items-start gap-2.5 text-sm text-dark-600">
            <CheckCircle
              size={16}
              className="text-primary-500 mt-0.5 shrink-0"
            />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  )
}

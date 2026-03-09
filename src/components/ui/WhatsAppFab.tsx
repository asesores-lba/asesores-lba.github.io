import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'
import { company } from '@/data/company'

export default function WhatsAppFab() {
  return (
    <motion.a
      href={`https://wa.me/${company.contact.whatsapp}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 1, type: 'spring', stiffness: 200 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Contactar por WhatsApp"
    >
      <div className="relative flex items-center">
        <span className="absolute right-full mr-3 px-3 py-1.5 bg-white text-dark-900 text-sm font-medium rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
          ¿Necesitas ayuda?
        </span>
        <div className="flex items-center justify-center w-14 h-14 rounded-full bg-green-500 text-white shadow-lg shadow-green-500/30">
          <MessageCircle size={28} />
        </div>
      </div>
    </motion.a>
  )
}

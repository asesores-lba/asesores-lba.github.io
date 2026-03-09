import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Home, ArrowLeft } from 'lucide-react'

export default function NotFoundPage() {
  return (
    <div className="pt-16 flex-1 flex items-center justify-center bg-dark-900">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center px-4 py-20"
      >
        <h1 className="text-8xl font-bold text-primary-500 mb-4">404</h1>
        <h2 className="text-2xl font-bold text-white mb-3">
          Página no encontrada
        </h2>
        <p className="text-dark-400 mb-8 max-w-md mx-auto">
          Lo sentimos, la página que buscas no existe o ha sido movida.
        </p>
        <div className="flex gap-4 justify-center">
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary-500 text-dark-950 font-semibold rounded-xl hover:bg-primary-400 transition-colors"
          >
            <Home size={18} />
            Ir al inicio
          </Link>
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center gap-2 px-6 py-3 border border-dark-600 text-white font-medium rounded-xl hover:bg-dark-800 transition-colors"
          >
            <ArrowLeft size={18} />
            Volver
          </button>
        </div>
      </motion.div>
    </div>
  )
}

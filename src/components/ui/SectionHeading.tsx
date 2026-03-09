import { motion } from 'framer-motion'

interface SectionHeadingProps {
  title: string
  subtitle?: string
  light?: boolean
}

export default function SectionHeading({
  title,
  subtitle,
  light = false,
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.5 }}
      className="text-center mb-12"
    >
      <h2
        className={`text-3xl md:text-4xl font-bold mb-3 ${
          light ? 'text-dark-900' : 'text-white'
        }`}
      >
        {title}
      </h2>
      <div className="w-16 h-1 bg-primary-500 mx-auto rounded-full" />
      {subtitle && (
        <p
          className={`mt-4 max-w-2xl mx-auto text-lg ${
            light ? 'text-dark-500' : 'text-dark-400'
          }`}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  )
}

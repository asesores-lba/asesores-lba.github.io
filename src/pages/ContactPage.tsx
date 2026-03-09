import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, MessageCircle } from 'lucide-react'
import SectionHeading from '@/components/ui/SectionHeading'
import ContactForm from '@/components/ContactForm'
import { company } from '@/data/company'

const contactCards = [
  {
    icon: MapPin,
    title: 'Dirección',
    lines: [company.contact.address, company.contact.building, company.contact.city],
  },
  {
    icon: Phone,
    title: 'Teléfonos',
    lines: company.contact.phones,
    hrefs: company.contact.phones.map((p) => `tel:${p}`),
  },
  {
    icon: MessageCircle,
    title: 'WhatsApp',
    lines: company.contact.whatsappNumbers,
    hrefs: company.contact.whatsappNumbers.map(
      (n) => `https://wa.me/${n.replace(/[^0-9]/g, '')}`
    ),
  },
  {
    icon: Mail,
    title: 'Email',
    lines: company.contact.emails,
    hrefs: company.contact.emails.map((e) => `mailto:${e}`),
  },
]

export default function ContactPage() {
  return (
    <div className="pt-16">
      <section className="section-padding bg-dark-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Contáctanos"
            subtitle="Nos encantaría escucharte. Escríbenos y te responderemos lo antes posible."
          />

          {/* Contact cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactCards.map((card, i) => {
              const Icon = card.icon
              return (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="bg-dark-800/50 border border-dark-700 rounded-2xl p-6 text-center hover:border-primary-500/50 transition-colors"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary-500/10 flex items-center justify-center mx-auto mb-4">
                    <Icon size={22} className="text-primary-500" />
                  </div>
                  <h3 className="text-white font-semibold mb-3">{card.title}</h3>
                  {card.lines.map((line, j) =>
                    card.hrefs ? (
                      <a
                        key={line}
                        href={card.hrefs[j]}
                        className="block text-sm text-dark-400 hover:text-primary-500 transition-colors"
                      >
                        {line}
                      </a>
                    ) : (
                      <p key={line} className="text-sm text-dark-400">
                        {line}
                      </p>
                    )
                  )}
                </motion.div>
              )
            })}
          </div>

          {/* Contact form */}
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">
              Envíanos un mensaje
            </h3>
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  )
}

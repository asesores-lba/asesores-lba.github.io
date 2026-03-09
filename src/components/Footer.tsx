import { company } from '@/data/company'
import { Mail, Phone, MapPin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-dark-950 border-t border-dark-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/assets/img/logo.png"
                alt="Asesores LBA"
                className="h-12 w-auto"
              />
            </div>
            <p className="text-dark-400 text-sm leading-relaxed">
              {company.description}
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contacto</h3>
            <ul className="space-y-3 text-sm text-dark-400">
              <li className="flex items-start gap-2">
                <MapPin size={16} className="text-primary-500 mt-0.5 shrink-0" />
                <span>
                  {company.contact.address}
                  <br />
                  {company.contact.building}
                  <br />
                  {company.contact.city}
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} className="text-primary-500 shrink-0" />
                <a
                  href={`tel:${company.contact.phones[0]}`}
                  className="hover:text-primary-500 transition-colors"
                >
                  {company.contact.phones[0]}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} className="text-primary-500 shrink-0" />
                <a
                  href={`mailto:${company.contact.emails[0]}`}
                  className="hover:text-primary-500 transition-colors"
                >
                  {company.contact.emails[0]}
                </a>
              </li>
            </ul>
          </div>

          {/* Schedule */}
          <div>
            <h3 className="text-white font-semibold mb-4">Horarios</h3>
            <ul className="space-y-2 text-sm">
              {company.schedule.map((item) => (
                <li
                  key={item.day}
                  className="flex justify-between text-dark-400"
                >
                  <span>{item.day}</span>
                  <span
                    className={
                      item.isClosed ? 'text-primary-500 font-medium' : ''
                    }
                  >
                    {item.time}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-dark-800 text-center text-sm text-dark-500">
          &copy; {new Date().getFullYear()} Asesores LBA. Todos los derechos
          reservados.
        </div>
      </div>
    </footer>
  )
}

import HeroBanner from '@/components/HeroBanner'
import ExperienceGrid from '@/components/ExperienceGrid'
import ServiceCard from '@/components/ServiceCard'
import ScheduleTable from '@/components/ScheduleTable'
import StatsSection from '@/components/StatsSection'
import SectionHeading from '@/components/ui/SectionHeading'
import { company } from '@/data/company'
import { experiences, serviceCategories } from '@/data/services'

export default function HomePage() {
  return (
    <>
      <HeroBanner
        title="Asesores LBA"
        subtitle={company.tagline}
        description={company.description}
        backgroundImage="/assets/img/home-banner-2.jpg"
      />

      {/* Stats strip */}
      <StatsSection />

      {/* Experience section */}
      <section className="section-padding bg-dark-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Nuestros Servicios"
            subtitle="Soluciones integrales para tu empresa"
          />
          <ExperienceGrid experiences={experiences} />
        </div>
      </section>

      {/* Services detail section */}
      <section className="section-padding bg-dark-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="¿Qué Ofrecemos?"
            subtitle="Conoce nuestro portafolio completo de servicios profesionales"
            light
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {serviceCategories.map((service, i) => (
              <ServiceCard key={service.category} service={service} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Schedule section */}
      <section className="section-padding bg-dark-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Horarios y Contacto"
            subtitle="Estamos disponibles para atenderte"
          />
          <ScheduleTable />
        </div>
      </section>
    </>
  )
}

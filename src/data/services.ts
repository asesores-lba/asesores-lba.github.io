import type { LucideIcon } from 'lucide-react'
import { Scale, GraduationCap, Landmark, HardHat } from 'lucide-react'

export interface Experience {
  icon: LucideIcon
  title: string
  description: string
}

export const experiences: Experience[] = [
  {
    icon: Scale,
    title: 'Asesoría Contable y Financiera',
    description:
      'Ofrecemos servicios de asesoría contable y financiera para optimizar la gestión de su empresa, cumplir con las obligaciones fiscales y tomar decisiones estratégicas basadas en información confiable.',
  },
  {
    icon: GraduationCap,
    title: 'Capacitación y Educación',
    description:
      'Programas de formación especializada en temas contables, NIIF, negocios fiduciarios y desarrollo profesional para colaboradores y ejecutivos.',
  },
  {
    icon: Landmark,
    title: 'Asesoría Jurídica',
    description:
      'Brindamos soporte legal integral en derecho laboral, seguridad social, derecho civil, comercial y disciplinario para proteger sus intereses empresariales.',
  },
  {
    icon: HardHat,
    title: 'Auditoría de Cuentas en Proyectos de Construcción',
    description:
      'Servicios especializados de auditoría de cuentas para proyectos de construcción y sectores afines, garantizando transparencia y control financiero en cada etapa.',
  },
]

export interface ServiceCategory {
  category: string
  items: string[]
}

export const serviceCategories: ServiceCategory[] = [
  {
    category: 'Auditoría',
    items: ['Auditoría Externa'],
  },
  {
    category: 'Impuestos',
    items: [
      'Consultorio Tributario',
      'Elaboración y revisión de Información en Medios Magnéticos',
      'Elaboración y revisión de Declaraciones Tributarias',
    ],
  },
  {
    category: 'Consultorías',
    items: [
      'Asesoría contable y financiera',
      'Planeación Estratégica',
      'Plan de negocios',
      'Asesoría en Normas Internacionales',
    ],
  },
  {
    category: 'Capacitación y Educación',
    items: [
      'Capacitación en negocios fiduciarios',
      'Capacitación Contable',
      'Capacitación NIIF',
      'Entrenamiento para el personal del cliente',
      'Capacitación y Educación continua a Colaboradores y Ejecutivos',
    ],
  },
  {
    category: 'Asesoría Jurídica',
    items: [
      'Derecho Laboral',
      'Seguridad Social',
      'Derecho Civil',
      'Derecho Comercial',
      'Disciplinario',
    ],
  },
  {
    category: 'Auditoría de Cuentas en Construcción',
    items: [
      'Revisiones periódicas de cuentas para gestión de recursos',
      'Informes mensuales claros y precisos',
      'Control financiero en cada etapa del proyecto',
      'Acompañamiento en administración financiera de proyectos',
    ],
  },
]

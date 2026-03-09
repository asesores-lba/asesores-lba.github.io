export const company = {
  name: 'Asesores LBA',
  tagline: 'Profesionales en quien confiar',
  description:
    'Somos un equipo de profesionales especializados en consultoría contable, financiera y jurídica. Brindamos soluciones integrales a empresas y emprendedores que buscan crecer con confianza.',

  mission:
    'Proporcionar servicios de consultoría y asesoría contable y financiera, enlazados con soporte jurídico para fortalecer negocios de confianza, contribuyendo a la proyección de personas naturales y PYMES. Buscamos satisfacer sus necesidades y expectativas, así como las de las personas que trabajan en sus empresas o emprendimientos, logrando rentabilidad y sostenibilidad en el mercado.',

  vision:
    'Ser la mejor alternativa de profesionales de confianza que prestan servicios de asesoría y consultoría contable y financiera, y jurídica a personas naturales, pequeñas y medianas empresas y proyectos innovadores de emprendimiento.',

  contact: {
    address: 'Carrera 43 #29-21 Interior 2002',
    building: 'Edificio Belmonte',
    city: 'Medellín – Colombia',
    phones: ['+57 314 862 0990', '+57 315 544 8487'],
    whatsappNumbers: ['+57 315 544 8487', '+57 312 233 1773'],
    emails: ['contacto.asesores.lba@gmail.com'],
    whatsapp: '573155448487',
  },

  schedule: [
    { day: 'Lunes', time: '8:00 am - 6:00 pm', isClosed: false },
    { day: 'Martes', time: '8:00 am - 6:00 pm', isClosed: false },
    { day: 'Miércoles', time: '8:00 am - 6:00 pm', isClosed: false },
    { day: 'Jueves', time: '8:00 am - 6:00 pm', isClosed: false },
    { day: 'Viernes', time: '8:00 am - 6:00 pm', isClosed: false },
    { day: 'Sábado', time: 'CERRADO', isClosed: true },
    { day: 'Domingo', time: 'CERRADO', isClosed: true },
  ],

  social: {
    youtube: {
      channelId: 'UCO54BfW9ZMrfIc3K1IvzlQA',
    },
  },
} as const

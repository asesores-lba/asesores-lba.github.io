export interface TimelineEntry {
  year: string
  title: string
  institution?: string
  location?: string
}

export interface TeamMember {
  name: string
  role: string
  photo: string
  yearsExperience: string
  specializations: string[]
  bio: string
  education: TimelineEntry[]
  workExperience: TimelineEntry[]
}

export const team: TeamMember[] = [
  {
    name: 'Liliana Bustos Arteaga',
    role: 'Contador Público',
<<<<<<< HEAD
    photo: '/assets/img/asesor-4.jpg',
    yearsExperience: '20+',
=======
    photo: '/assets/img/asesor-1.jpg',
    yearsExperience: '15+',
>>>>>>> e247458391d8cb910184cb5926cb1ffa59386cb3
    specializations: [
      'Análisis de estados financieros',
      'Preparación de impuestos',
      'Contabilidad NIIF',
    ],
<<<<<<< HEAD
    bio: 'Profesional con más de 20 años de experiencia en contabilidad, auditoría financiera y asesoría tributaria para empresas del sector fiduciario y de salud.',
=======
    bio: 'Profesional con más de 15 años de experiencia en contabilidad, auditoría financiera y asesoría tributaria para empresas del sector fiduciario y de salud.',
>>>>>>> e247458391d8cb910184cb5926cb1ffa59386cb3
    education: [
      {
        year: '2000 - 2006',
        title: 'Contador Público',
        institution: 'Universidad Libre Seccional Cali',
      },
      {
        year: '2009 - 2010',
        title: 'Diplomado NIIF',
      },
      {
        year: '2010 - 2012',
        title: 'Especialización Administración de Negocios',
        institution: 'Universidad San Buenaventura, Cali',
      },
      {
        year: '2017',
        title: 'Diplomado NIIF',
        institution: 'PWC',
      },
      {
        year: '2018',
        title: 'Diplomado Derecho Tributario',
        institution: 'Universidad de Antioquia',
      },
    ],
    workExperience: [
      {
        year: '4 años',
        title: 'Revisor Fiscal',
        institution: 'Edificio Compañía Financiera',
        location: 'Cali',
      },
      {
        year: '2008 - 2013',
        title: 'Contador Sénior',
        institution: 'Alianza Fiduciaria',
        location: 'Cali',
      },
      {
        year: '2013 - 2014',
        title: 'Contador General / Tesorera',
        institution: 'Oncólogos Asociados de Imbanaco S.A',
        location: 'Cali',
      },
      {
        year: '2015 - 2020',
        title: 'Contador Sénior',
        institution: 'Credicorp Capital Fiduciaria S.A',
        location: 'Medellín',
      },
    ],
  },
  {
    name: 'Manuela Restrepo',
    role: 'Abogada - Especialista en Derecho Laboral',
    photo: '/assets/img/asesor-2.jpg',
    yearsExperience: '2+',
    specializations: [
      'Derecho laboral',
      'Seguridad social',
      'Procesos legales',
    ],
    bio: 'Abogada con énfasis en derecho laboral y seguridad social, con experiencia en vinculación corporativa y control interno disciplinario.',
    education: [
      {
        year: '2015',
        title: 'Abogada con énfasis en Laboral y Seguridad Social',
        institution: 'Universidad de Medellín',
      },
      {
        year: '2017',
        title: 'Especialista en Responsabilidad Civil y del Estado',
        institution: 'Universidad Autónoma Latinoamericana',
      },
      {
        year: '2017',
        title: 'Seminario Actualización UGPP',
        institution: 'Colegio Antioqueño de Abogados',
      },
      {
        year: '2019',
        title: 'Diplomado Régimen Disciplinario',
        institution: 'Politécnico Superior de Colombia',
      },
      {
        year: '2019',
        title: 'Diplomado IPS Certification',
        institution: 'SENA/ACESI',
      },
      {
        year: '2020',
        title: 'Diplomado Derecho Mercantil y Sociedades',
        institution: 'Politécnico Superior de Colombia',
      },
    ],
    workExperience: [
      {
        year: '2017 - 2018',
        title: 'Abogada',
        institution: 'Pensiónate Ya',
        location: 'Medellín',
      },
      {
        year: '2018 - 2019',
        title: 'Analista Jr. Vinculación',
        institution: 'Credicorp Capital Fiduciaria S.A',
        location: 'Medellín',
      },
      {
        year: '2019',
        title: 'Profesional Especializada Oficina Control Interno Disciplinario',
        institution: 'ESE Hospital San José del Guaviare',
      },
    ],
  },
  {
    name: 'Sophia Ortiz Claros',
    role: 'Abogada - Especialista Inmobiliaria',
    photo: '/assets/img/asesor-3.jpg',
    yearsExperience: '10+',
    specializations: [
      'Derecho inmobiliario',
      'Desarrollo de propiedades',
      'Estructuras fiduciarias',
    ],
    bio: 'Abogada especialista en derecho urbano e inmobiliario con amplia experiencia en negocios fiduciarios y desarrollo comercial en el sector fiduciario.',
    education: [
      {
        year: '2014',
        title: 'Abogada',
        institution: 'Universidad de Antioquia',
      },
      {
        year: '2015',
        title: 'Diplomado Derecho Urbanístico e Inmobiliario',
        institution: 'Universidad de Antioquia',
      },
      {
        year: '2016',
        title: 'Especialización Derecho Procesal',
        institution: 'Universidad de Antioquia',
      },
      {
        year: '2017',
        title: 'Diplomado Actualización Tributaria',
        institution: 'Universidad de Medellín',
      },
      {
        year: '2018',
        title: 'Especialización Derecho Urbano',
        institution: 'Universidad EAFIT',
      },
    ],
    workExperience: [
      {
        year: '2012 - 2013',
        title: 'Asesora Inmobiliaria',
        institution: 'Adquirir Propiedad Raíz',
      },
      {
        year: '2013 - 2015',
        title: 'Asistente Negocios Fiduciarios',
        institution: 'Alianza Fiduciaria',
      },
      {
        year: '2015 - 2017',
        title: 'Directora Comercial Negocios Fiduciarios',
        institution: 'Fiduciaria de Occidente',
      },
      {
        year: '2017 - 2019',
        title: 'Gerente Comercial Negocios Fiduciarios',
        institution: 'Credicorp Capital Fiduciaria S.A',
      },
      {
        year: '2019',
        title: 'Abogada Externa',
        institution: 'Alianza Fiduciaria',
      },
    ],
  },
]

export interface NavLink {
  label: string
  path: string
}

export const navLinks: NavLink[] = [
  { label: 'Inicio', path: '/' },
  { label: 'Quiénes Somos', path: '/about' },
  { label: 'Aprendizaje', path: '/learn' },
  { label: 'Contacto', path: '/contact' },
]

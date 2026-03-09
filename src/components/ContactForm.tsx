import React, { useState } from 'react'
import type { ChangeEvent } from 'react'
import { motion } from 'framer-motion'
import { Send, Loader2, CheckCircle2, AlertCircle } from 'lucide-react'

interface FormFields {
  name: string
  email: string
  subject: string
  message: string
}

interface FormErrors {
  name?: string
  email?: string
  subject?: string
  message?: string
}

function validate(fields: FormFields): FormErrors {
  const errors: FormErrors = {}
  if (!fields.name.trim()) errors.name = 'El nombre es requerido'
  if (!fields.email.trim()) {
    errors.email = 'El correo es requerido'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)) {
    errors.email = 'Ingresa un correo válido'
  }
  if (!fields.subject.trim()) errors.subject = 'El asunto es requerido'
  if (!fields.message.trim()) {
    errors.message = 'El mensaje es requerido'
  } else if (fields.message.trim().length < 20) {
    errors.message = 'El mensaje debe tener al menos 20 caracteres'
  }
  return errors
}

const inputClass =
  'w-full px-4 py-3 bg-dark-800 border rounded-xl text-white placeholder-dark-500 focus:outline-none focus:ring-1 transition-colors text-sm'

const getInputBorder = (touched: boolean, error?: string) => {
  if (!touched) return 'border-dark-700 focus:border-primary-500 focus:ring-primary-500'
  if (error) return 'border-red-500/70 focus:border-red-500 focus:ring-red-500/30'
  return 'border-green-500/50 focus:border-green-500 focus:ring-green-500/30'
}

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')
  const [fields, setFields] = useState<FormFields>({
    name: '', email: '', subject: '', message: '',
  })
  const [touched, setTouched] = useState<Record<string, boolean>>({})
  const [errors, setErrors] = useState<FormErrors>({})

  function handleChange(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = e.target
    const updated = { ...fields, [name]: value }
    setFields(updated)
    if (touched[name]) {
      setErrors(validate(updated))
    }
  }

  function handleBlur(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name } = e.target
    setTouched((t) => ({ ...t, [name]: true }))
    setErrors(validate(fields))
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const allTouched = { name: true, email: true, subject: true, message: true }
    setTouched(allTouched)
    const errs = validate(fields)
    setErrors(errs)
    if (Object.keys(errs).length > 0) return

    setStatus('sending')
    // Simulate submission — wire to Formspree/EmailJS here
    setTimeout(() => setStatus('sent'), 1500)
  }

  if (status === 'sent') {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-green-500/10 border border-green-500/30 rounded-2xl p-10 text-center"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', stiffness: 200, delay: 0.1 }}
          className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-4"
        >
          <CheckCircle2 size={32} className="text-green-500" />
        </motion.div>
        <h3 className="text-xl font-bold text-white mb-2">¡Mensaje enviado!</h3>
        <p className="text-dark-400 mb-6">
          Nos pondremos en contacto contigo lo antes posible.
        </p>
        <button
          onClick={() => {
            setStatus('idle')
            setFields({ name: '', email: '', subject: '', message: '' })
            setTouched({})
            setErrors({})
          }}
          className="text-sm text-primary-500 hover:text-primary-400 transition-colors underline underline-offset-4"
        >
          Enviar otro mensaje
        </button>
      </motion.div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {/* Name */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-dark-300 mb-1.5">
            Nombre completo
          </label>
          <input
            id="name" name="name" type="text"
            value={fields.name}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`${inputClass} ${getInputBorder(!!touched.name, errors.name)}`}
            placeholder="Tu nombre"
          />
          {touched.name && errors.name && (
            <p className="mt-1.5 text-xs text-red-400 flex items-center gap-1">
              <AlertCircle size={12} />{errors.name}
            </p>
          )}
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-dark-300 mb-1.5">
            Correo electrónico
          </label>
          <input
            id="email" name="email" type="email"
            value={fields.email}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`${inputClass} ${getInputBorder(!!touched.email, errors.email)}`}
            placeholder="tu@email.com"
          />
          {touched.email && errors.email && (
            <p className="mt-1.5 text-xs text-red-400 flex items-center gap-1">
              <AlertCircle size={12} />{errors.email}
            </p>
          )}
        </div>
      </div>

      {/* Subject */}
      <div>
        <label htmlFor="subject" className="block text-sm font-medium text-dark-300 mb-1.5">
          Asunto
        </label>
        <input
          id="subject" name="subject" type="text"
          value={fields.subject}
          onChange={handleChange}
          onBlur={handleBlur}
          className={`${inputClass} ${getInputBorder(!!touched.subject, errors.subject)}`}
          placeholder="¿En qué podemos ayudarte?"
        />
        {touched.subject && errors.subject && (
          <p className="mt-1.5 text-xs text-red-400 flex items-center gap-1">
            <AlertCircle size={12} />{errors.subject}
          </p>
        )}
      </div>

      {/* Message */}
      <div>
        <div className="flex justify-between mb-1.5">
          <label htmlFor="message" className="block text-sm font-medium text-dark-300">
            Mensaje
          </label>
          <span className={`text-xs ${fields.message.length < 20 && touched.message ? 'text-red-400' : 'text-dark-500'}`}>
            {fields.message.length}/20 mín.
          </span>
        </div>
        <textarea
          id="message" name="message" rows={5}
          value={fields.message}
          onChange={handleChange}
          onBlur={handleBlur}
          className={`${inputClass} ${getInputBorder(!!touched.message, errors.message)} resize-none`}
          placeholder="Cuéntanos sobre tu consulta..."
        />
        {touched.message && errors.message && (
          <p className="mt-1.5 text-xs text-red-400 flex items-center gap-1">
            <AlertCircle size={12} />{errors.message}
          </p>
        )}
      </div>

      <button
        type="submit"
        disabled={status === 'sending'}
        className="group inline-flex items-center gap-2 px-8 py-3.5 bg-primary-500 text-dark-950 font-semibold rounded-xl hover:bg-primary-400 hover:shadow-lg hover:shadow-primary-500/20 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {status === 'sending' ? (
          <><Loader2 size={18} className="animate-spin" />Enviando...</>
        ) : (
          <>
            <Send size={18} className="group-hover:translate-x-0.5 transition-transform" />
            Enviar mensaje
          </>
        )}
      </button>
    </form>
  )
}

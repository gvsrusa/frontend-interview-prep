import { useState } from 'react'

export default function ContactForm() {
  const [fields, setFields] = useState({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const validate = () => {
    const newErrors = {}
    if (!fields.name.trim()) newErrors.name = 'Name is required'
    if (!fields.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)) {
      newErrors.email = 'Email is invalid'
    }
    if (!fields.message.trim()) {
      newErrors.message = 'Message is required'
    } else if (fields.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters'
    }
    return newErrors
  }

  const handleChange = (e) => {
    setFields({ ...fields, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const newErrors = validate()
    setErrors(newErrors)
    if (Object.keys(newErrors).length === 0) {
      setSubmitted(true)
    }
  }

  if (submitted) {
    return <p>Thank you for your message!</p>
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <h2>Contact Us</h2>

      <div>
        <label htmlFor="name">Name</label>
        <input id="name" name="name" value={fields.name} onChange={handleChange} />
        {errors.name && <span role="alert">{errors.name}</span>}
      </div>

      <div>
        <label htmlFor="email">Email</label>
        <input id="email" name="email" type="email" value={fields.email} onChange={handleChange} />
        {errors.email && <span role="alert">{errors.email}</span>}
      </div>

      <div>
        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" value={fields.message} onChange={handleChange} />
        {errors.message && <span role="alert">{errors.message}</span>}
      </div>

      <button type="submit">Submit</button>
    </form>
  )
}

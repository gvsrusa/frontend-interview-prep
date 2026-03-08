import { useState } from 'react'

export default function MultiStepForm() {
  const [step, setStep] = useState(0)
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    city: '',
  })
  const [errors, setErrors] = useState({})

  const validateStep = () => {
    const newErrors = {}

    if (step === 0) {
      if (!formData.name.trim()) newErrors.name = 'Name is required'
      if (!formData.email.trim()) newErrors.email = 'Email is required'
      else if (!/\S+@\S+\.\S+/.test(formData.email))
        newErrors.email = 'Invalid email format'
    }

    if (step === 1) {
      if (!formData.address.trim()) newErrors.address = 'Address is required'
      if (!formData.city.trim()) newErrors.city = 'City is required'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const nextStep = () => {
    if (validateStep()) setStep((s) => s + 1)
  }

  const prevStep = () => setStep((s) => s - 1)

  const handleSubmit = () => {
    setSubmitted(true)
  }

  const updateField = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    if (errors[field]) {
      setErrors((prev) => {
        const next = { ...prev }
        delete next[field]
        return next
      })
    }
  }

  if (submitted) {
    return (
      <div>
        <h2>Multi-Step Form</h2>
        <p>Form submitted successfully!</p>
      </div>
    )
  }

  return (
    <div>
      <h2>Multi-Step Form</h2>
      <p>Step {step + 1} of 3</p>

      {step === 0 && (
        <div>
          <h3>Personal Info</h3>
          <input
            placeholder="Name"
            value={formData.name}
            onChange={(e) => updateField('name', e.target.value)}
          />
          {errors.name && <p role="alert">{errors.name}</p>}
          <input
            placeholder="Email"
            value={formData.email}
            onChange={(e) => updateField('email', e.target.value)}
          />
          {errors.email && <p role="alert">{errors.email}</p>}
        </div>
      )}

      {step === 1 && (
        <div>
          <h3>Address</h3>
          <input
            placeholder="Address"
            value={formData.address}
            onChange={(e) => updateField('address', e.target.value)}
          />
          {errors.address && <p role="alert">{errors.address}</p>}
          <input
            placeholder="City"
            value={formData.city}
            onChange={(e) => updateField('city', e.target.value)}
          />
          {errors.city && <p role="alert">{errors.city}</p>}
        </div>
      )}

      {step === 2 && (
        <div>
          <h3>Summary</h3>
          <p>Name: {formData.name}</p>
          <p>Email: {formData.email}</p>
          <p>Address: {formData.address}</p>
          <p>City: {formData.city}</p>
        </div>
      )}

      <div>
        {step > 0 && <button onClick={prevStep}>Back</button>}
        {step < 2 && <button onClick={nextStep}>Next</button>}
        {step === 2 && <button onClick={handleSubmit}>Submit</button>}
      </div>
    </div>
  )
}

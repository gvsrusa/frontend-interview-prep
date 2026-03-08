import { useState, useRef, type FormEvent } from 'react'

export function ControlledForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState<{ name: string; email: string } | null>(null)

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    setSubmitted({ name, email })
  }

  return (
    <div>
      <h3>Controlled Form</h3>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          placeholder="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
      {submitted && (
        <p data-testid="controlled-result">
          Submitted: {submitted.name}, {submitted.email}
        </p>
      )}
    </div>
  )
}

export function UncontrolledForm() {
  const nameRef = useRef<HTMLInputElement>(null)
  const emailRef = useRef<HTMLInputElement>(null)
  const [submitted, setSubmitted] = useState<{ name: string; email: string } | null>(null)

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    setSubmitted({
      name: nameRef.current?.value ?? '',
      email: emailRef.current?.value ?? '',
    })
  }

  return (
    <div>
      <h3>Uncontrolled Form</h3>
      <form onSubmit={handleSubmit}>
        <input placeholder="Name" ref={nameRef} defaultValue="" />
        <input placeholder="Email" type="email" ref={emailRef} defaultValue="" />
        <button type="submit">Submit</button>
      </form>
      {submitted && (
        <p data-testid="uncontrolled-result">
          Submitted: {submitted.name}, {submitted.email}
        </p>
      )}
    </div>
  )
}

export default function ControlledVsUncontrolled() {
  return (
    <div>
      <h2>Controlled vs Uncontrolled</h2>
      <ControlledForm />
      <hr />
      <UncontrolledForm />
    </div>
  )
}

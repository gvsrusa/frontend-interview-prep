import { useState, useRef } from 'react'

export function ControlledForm() {
  // TODO: Use useState to manage form field values
  // TODO: Wire value and onChange to each input
  // TODO: On submit, display the submitted data

  return (
    <div>
      <h3>Controlled Form</h3>
      <form>
        <input placeholder="Name" />
        <input placeholder="Email" type="email" />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export function UncontrolledForm() {
  // TODO: Use useRef to reference each input
  // TODO: Use defaultValue for initial values
  // TODO: On submit, read values from refs

  return (
    <div>
      <h3>Uncontrolled Form</h3>
      <form>
        <input placeholder="Name" />
        <input placeholder="Email" type="email" />
        <button type="submit">Submit</button>
      </form>
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

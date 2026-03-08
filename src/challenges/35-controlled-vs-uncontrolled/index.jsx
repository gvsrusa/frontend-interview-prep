function ControlledForm() {
  return <div>
      <h3>Controlled Form</h3>
      <form>
        <input placeholder="Name" />
        <input placeholder="Email" type="email" />
        <button type="submit">Submit</button>
      </form>
    </div>;
}
function UncontrolledForm() {
  return <div>
      <h3>Uncontrolled Form</h3>
      <form>
        <input placeholder="Name" />
        <input placeholder="Email" type="email" />
        <button type="submit">Submit</button>
      </form>
    </div>;
}
export default function ControlledVsUncontrolled() {
  return <div>
      <h2>Controlled vs Uncontrolled</h2>
      <ControlledForm />
      <hr />
      <UncontrolledForm />
    </div>;
}
export { ControlledForm, UncontrolledForm };

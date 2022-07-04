import { useState } from "react";

const Register = () => {
  const [state, setState] = useState({email: '', pass: '', repass: ''})

   const handleInput = (e: any) => {
    const nameInput = e.target.name;
    setState({...state, [nameInput] : e.target.value})
   }

   const handleSubmit = (e: any) => {
    e.preventDefault();
    if(state.email !== '*@*.**') {
      alert('Email is incorrect format')
    }

    if(state.pass !== '/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])([a-zA-Z0-9]{8})$/' ) {
      alert('Password must have 8 character')
    }
   }

  return (
        <div className="form-register container">
          <h2 className="text-uppercase text-center mb-5">Create an account</h2>
          <form>
            <div className="form-outline mb-4">
              <input
                type="email"
                name="email"
                className="form-control form-control-lg"
                value={state.email}
                onChange={handleInput}
                required
              />
              <label className="form-label" htmlFor="form3Example3cg">
                Your Email
              </label>
            </div>
            <div className="form-outline mb-4">
              <input
                type="password"
                name="password"
                className="form-control form-control-lg"
                value={state.pass}
                onChange={handleInput}
              />
              <label className="form-label">
                Password
              </label>
            </div>
            <div className="form-outline mb-4">
              <input
                type="password"
                name="password"
                className="form-control form-control-lg"
                value={state.repass}
                onChange={handleInput}
              />
              <label className="form-label" htmlFor="form3Example4cdg">
                Repeat your password
              </label>
              <button onClick={handleSubmit}>Register</button>
            </div>
          </form>
        </div>
  );
};

export default Register;

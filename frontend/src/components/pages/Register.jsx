import React from 'react'

function Register() {
  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Registration</h2>
      <form>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">User Name</label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter your username"/>
        </div>
        <div className="mb-3">
          <label htmlFor="InputPassword" className="form-label">Password</label>
          <input type="password" className="form-control" id="InputPassword" placeholder="Enter your password"/>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword2" className="form-label">Confirm Password</label>
          <input type="password" className="form-control" id="exampleInputPassword2" placeholder="Re-enter your password"/>
        </div>
        <div className="mb-3 form-check">
          <input type="checkbox" className="form-check-input" id="termsCheck" required />
          <label className="form-check-label" htmlFor="termsCheck">
            I agree to the Terms & Conditions
          </label>
        </div>
        <button type="submit" className="btn btn-primary w-100">Submit</button>
      </form>
    </div>
  )
}

export default Register

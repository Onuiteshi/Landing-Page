import React, { Component } from 'react'
import { Link } from 'react-router-dom'
// import './SignUp.css'


class SignUp extends Component {
    render() {
        return (
            <div className="bg-light container" style={{borderRadius:"20px"}}>
                

                <div className="align-items-center">
                    <div className="mb-3">
                        <h1>Basic Information</h1>
                        <p >Enter the following Information below</p>
                    </div>
                    

                    <div className="row g-3 mb-3">
                        <div className="col form-floating">
                            <input type="text" class="form-control" id="inputFirst" placeholder="First name"  />
                            <label for="inputFirst" className="text-secondary">Company name</label>
                        </div>
                        <div className="col form-floating">
                            <input type="text" className="form-control " id="inputLast" placeholder="Last name"  />
                            <label for="inputLast" className="text-secondary">Last name</label>
                        </div>
                    </div>

                    <div className="form-floating mb-3">
                        <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" />
                        <label for="inputAddress" className="text-secondary">Company address</label>
                    </div>

                    <div className="form-floating mb-3">
                        <input type="text" className="form-control" id="inputPhone" placeholder="1234 Main St" />
                        <label for="inputPhone" className="text-secondary">Phone Number</label>
                    </div>

                    <div className="form-floating mb-3">
                        <input type="email" className="form-control" id="floatingEmail" placeholder="name@example.com" />
                        <label for="floatingEmail" className="text-secondary">Company Email address</label>
                    </div>

                    <div className="form-floating  mb-5">
                        <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                        <label for="floatingPassword" className="text-secondary">Password</label>
                    </div>

                    <div  className="position-relative ">
                        <p className="text-center mx-auto mb-5">By clicking "Next" you agree to our <a href="#">Terms of Service, Privacy Policy,</a> and to receive marketing communications from Envoy.</p>
                        <p className="d-inline  ">
                            <span className=" mb-3 text-secondary">Got an Account?</span><Link to="/signin">Sign in</Link>
                        </p>
                        <Link to="/signin"><button type="button" className=" mb-1 btn btn-primary position-absolute bottom-0 end-0">Register</button></Link>
                        
                    </div>
                </div>

                
            </div>
        )
    }
}

export default SignUp

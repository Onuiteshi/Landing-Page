import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'


class SignIn extends Component {
    render() {
        return (
            <div className="bg-light   container" style={{borderRadius:"20px"}}>
                <div className="align-items-center">
                    <div className="mb-3">
                        <h1>You're Welcome Back!</h1>
                        <p >Enter the following Information below</p>
                    </div>

                    {/* form */}
                    <div class="form-floating mb-3">
                        <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" />
                        <label for="floatingInput" className="text-secondary">Email address</label>
                    </div>

                    <div class="form-floating mb-3">
                        <input type="password" class="form-control" id="floatingPassword" placeholder="Password" />
                        <label for="floatingPassword" className="text-secondary">Password</label>
                    </div>

                    <div className="mb-5">
                        <a href="#" >Forgot password?</a>
                    </div>

                    {/* login  button */}
                    <div className=" mb-5 position-relative">
                        <p className="d-inline ">just joining us here?</p><Link  to="/">Sign up</Link>
                        <button type="button" className="  btn btn-primary position-absolute bottom-0 end-0">Login</button>
                         
                    </div>
                </div>
            </div>
        )
    }
}

export default SignIn

import React, { Component } from 'react'
import SignIn from './signin/SignIn'
import SignUp from './signup/SignUp'
import {BrowserRouter as Router , Link, Route , Switch } from 'react-router-dom'
import './LandingPage.css'

class LandingPage extends Component {
    render() {
        return (
            <Router>
                <div  >
                   {/* header */}
                    <div className="position-relative ms-4 mt-3 " style={{width:'50px',height:'40px'}} >
                        <img  className="float-start" alt="bike-logo" src="https://image.shutterstock.com/image-vector/delivery-food-scooter-motorcycle-fork-260nw-1743456269.jpg" style={{borderRadius:'100%',width:'100%',height:'100%'}} />
                        <h2 className= "position-absolute ms-3 top-20 start-100 fs-4 fw-bold">DMS</h2>
                    </div>  

                    {/* Landing Page:Home-Section */}
                    <div className="container">
                        <div className="row">
                            {/* Fixed Welcome Page */}
                            <div className=" col-md-7 d-flex flex-column text-center align-items-center">
                                <div className="mb-5" style={{width:'200px',height:'200px'}} >
                                    <img   alt="delivery" src="https://image.shutterstock.com/image-vector/express-delivery-box-logo-icon-260nw-1355398829.jpg" style={{width:'100%',height:'100%',borderRadius:'100%',border:'0'}} />
                                </div>
                                <h2  className="fs-7 fw-bold mb-3">Let us help you manage <br/> your riders and delivery system. </h2>
                                <p className="text-secondary">Every logistics company whether it’s a multi-national branding <br/> corporation or a regular local deserves the basic standard necessities <br/>
                                in achieving a high service delivery. 
                                </p>
                                <Link to="/"><button type="button" class="btn btn-primary">Get Started </button></Link>
                            </div>
                            
                            {/* Route to Sign Up and Sign in */}
                            <div className="col-md-5 ">
                                <Switch>
                                    <Route exact path = '/' component={SignUp} />
                                    <Route exact path = '/signin' component={SignIn} />
                                </Switch>                  
                            </div>  
                        </div>
                    </div>
                    
                </div>
            </Router>
            
        )
    }
}

export default LandingPage

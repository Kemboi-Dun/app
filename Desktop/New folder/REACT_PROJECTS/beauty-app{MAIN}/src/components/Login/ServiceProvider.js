import React from 'react';
import { Link } from 'react-router-dom';
import CompanyLogo from './CompanyLogo';
import './formLogin.css'
function ServiceProvider() {
  return (
    <div>
        <CompanyLogo/>
        <div className="col-12 column-2">
            <div className=" title">
                <p className="mob-logo">Company
                    <span>Logo</span>
                </p>
                <h1>Log In As Service Provider</h1>
            </div>
            <form action="POST">
            <div className=" form-wrapper">
                
                    <input type="email" placeholder="Email Address"/>
                    <input type="Password" placeholder="Password"/>
                    
            </div>
            <button type="submit" value="LOG IN">LOG IN</button>
            </form>
            <div className="link">

   <Link to="/resetPassword">
                Forgot password?
                </Link>
            </div>
        </div>
    </div>
  )
}

export default ServiceProvider
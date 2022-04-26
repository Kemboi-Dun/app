import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import './selectLogin.css'
function SelectLogin() {
  return (
    <div>
                <div className="col-12 column-2">
            <div className=" title">
                <p className="mob-logo">Company
                    <span>Logo</span>
                </p>
                <h1>Log In</h1>
           
                
            </div>
            <Link className="test"  to="/clientLogin">
            <div className=" btn">
               
                <span>As Client</span>
                
            </div>
            </Link> 
            <Link className="test" to="/serviceProviderLogin">
            <div className=" btn">
            
            <span>As Service Provider</span>
              
            </div>
            </Link>


            <div className="link">
                <Link to="/resetPassword">
                Forgot password?
                </Link>
            </div>
        </div>
        <Outlet/>
    </div>
  )
}

export default SelectLogin
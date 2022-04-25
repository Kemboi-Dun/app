import React from 'react'
import './formLogin.css'
function ClientLogin() {
  return (
    <div>
        <div className="col-12 column-2">
            <div className=" title">
                <p className="mob-logo">Company
                    <span>Logo</span>
                </p>
                <h1>Log In As Client</h1>
            </div>
            <form action="POST">
            <div className=" form-wrapper">
                
                    <input type="email" placeholder="Email Address"/>
                    <input type="Password" placeholder="Password"/>    
            </div>
            <button type="submit" value="LOG IN">LOG IN</button>
            </form>
          
                
               
        
        
            <div className="link">
<a href="">Forgot password?</a>
            </div>
        </div>
    </div>
  )
}

export default ClientLogin
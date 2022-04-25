import React from 'react'
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
            <div className=" btn">
                <a href=""><span>As Client</span></a>
                
            </div>
            <div className=" btn">
                <a href=""><span>As Service Provider</span></a>
                
            </div>
            <div className="link">
<a href="">Forgot password?</a>
            </div>
        </div>
    </div>
  )
}

export default SelectLogin
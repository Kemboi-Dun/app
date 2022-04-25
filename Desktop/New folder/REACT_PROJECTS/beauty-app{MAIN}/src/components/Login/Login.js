import React from 'react'
import CompanyLogo from './CompanyLogo'
import './Login.css'
import ClientLogin from './ClientLogin'
import ServiceProvider from './ServiceProvider'
import SelectLogin from './SelectLogin'
function Login() {
  return (
    <div>
        <CompanyLogo/>
        <ServiceProvider/>
        {/* <SelectLogin/> */}
        {/* <ClientLogin/> */}
    </div>
  )
}

export default Login
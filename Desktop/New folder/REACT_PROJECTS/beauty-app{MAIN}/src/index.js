import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { render} from 'react-dom';
import './index.css';
import App from './App';
import ClientLogin from './components/Login/ClientLogin';
import ServiceProvider from './components/Login/ServiceProvider';


const rootElement = document.getElementById("root");
render(
<BrowserRouter>
<Routes>
  <Route path="/" element={<App/>}/>
  <Route path="clientLogin" element={<ClientLogin/>}/>
  <Route path="serviceProviderLogin" element={<ServiceProvider/>}/>
</Routes>
</BrowserRouter>, rootElement);


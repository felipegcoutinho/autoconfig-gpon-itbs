import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from './Components/Global/Header/Header';
import ProvisManual from './Components/Serviços/ProvisionamentoManual/ProvisManual';

ReactDOM.createRoot(document.getElementById('main')).render(
  <BrowserRouter>
    <React.StrictMode>
      <Header />
      <Routes>
        <Route exact path="/" element={<App />} />
        <Route exact path="/8820i" element={<App />} />
        <Route exact path="/G16" element={<App />} />
        <Route exact path="/G08" element={<App />} />
        <Route exact path="/Services" element={<ProvisManual />} />
      </Routes>
    </React.StrictMode>
  </BrowserRouter>
)

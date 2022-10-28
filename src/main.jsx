import React from 'react'
import ReactDOM from 'react-dom/client'
import AppMain from './AppMain'
import App from './App'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from './Components/Header/Header';

ReactDOM.createRoot(document.getElementById('main')).render(
  <BrowserRouter>
    <React.StrictMode>
      <Header />
      <Routes>
        <Route exact path="/" element={<AppMain />} />
        <Route exact path="/8820i" element={<AppMain />} />
        <Route exact path="/G16" element={<AppMain />} />
        <Route exact path="/G08" element={<AppMain />} />
      </Routes>
    </React.StrictMode>
  </BrowserRouter>
)

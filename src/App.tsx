import React from 'react';
// import logo from './logo.svg';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';

import Labs from "./Labs"
import Kanbas from "./Kanbas";


function App() {
  return (
   <HashRouter>
    <div className="h-100">
     <Routes>
      <Route path="/" element={<Navigate to="Labs"/>}/>
      <Route path="/Labs/*" element={<Labs />} />
      <Route path="/Kanbas/*" element={<Kanbas />} />
     </Routes>
    </div>
   </HashRouter>
 );}
 

export default App;

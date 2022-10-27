import React from 'react';
import ReactDOM from 'react-dom/client';
import{Componente1} from './Componente1/Componente1'
import { Cesaragudelo } from './Cesaragudelo/Cesaragudelo.js';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <Componente1></Componente1>
   <Cesaragudelo></Cesaragudelo>
  </React.StrictMode>
);



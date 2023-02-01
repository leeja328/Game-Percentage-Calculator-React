import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Result from './Result';
import Toainput from './Toainput';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Toainput />
    {/* <Result /> */}
  </React.StrictMode>
);


import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import '@fortawesome/fontawesome-free/css/all.min.css';
import "./styles/GlobalStyles.css";


const container = document.getElementById('root');
const root = createRoot(container); // This line throws the error if container is null
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
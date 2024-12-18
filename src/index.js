import React from 'react';
import 'notyf/notyf.min.css';
import './index.css';
import App from './App';

import { AuthProvider } from './context/AuthContext';
import { createRoot } from 'react-dom/client';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <AuthProvider>
    <App />
  </AuthProvider>
);
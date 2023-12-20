import React from 'react';
import ReactDOM from 'react-dom/client';

import '@/styles/index.css';

import App from './app.tsx';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
);

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import GamesCollection from './Games';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <GamesCollection/>
    </React.StrictMode>
);

//reportWebVitals(console.log); for å see user preformance

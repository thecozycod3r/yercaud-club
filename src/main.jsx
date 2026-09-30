import React from 'react';
import {createRoot, hydrateRoot} from 'react-dom/client';
import App from './App.jsx';

const root=document.getElementById('root');
const app=<App path={window.location.pathname}/>;
// Pages are prerendered at build time; hydrate them, and fall back to a client render in dev.
if(root.hasChildNodes())hydrateRoot(root,app);else createRoot(root).render(app);

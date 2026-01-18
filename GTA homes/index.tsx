import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

// Selecting the root element defined in your index.html
const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error("Could not find root element to mount to. Check if <div id='root'></div> exists in index.html");
}

const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    {/* BrowserRouter enables navigation/routing for the entire app */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

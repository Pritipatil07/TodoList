import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'
import App from './App';
import { Auth0Provider } from '@auth0/auth0-react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Auth0Provider
    domain="dev-v44q2pbqg28t20eb.us.auth0.com"
    clientId="eDOh4inEUNxRWRxv6FspH6qvWAAbz2rl"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <App />
  </Auth0Provider>
);


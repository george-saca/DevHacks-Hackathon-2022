import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import { QueryClient, QueryClientProvider } from "react-query";
import AppContextProvider from './contexts/AppContext'

const baseUrl = document.getElementsByTagName('base')[0].getAttribute('href');
const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
const client = new QueryClient();
root.render(
  <BrowserRouter basename={baseUrl}>
    <QueryClientProvider client={client}>
      <AppContextProvider>
        <App />
      </AppContextProvider>
    </QueryClientProvider>
  </BrowserRouter>);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.unregister();


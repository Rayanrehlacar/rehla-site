import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'react-toastify/dist/ReactToastify.css';
import App from './App';

import { Provider } from 'react-redux';
import { store } from './store';
import { ToastContainer } from 'react-toastify';
import './i18n';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <ToastContainer />
    <I18nextProvider i18n={i18n}>
      <App />
    </I18nextProvider>
    </Provider>
  </React.StrictMode>
);




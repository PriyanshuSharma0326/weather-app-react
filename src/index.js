import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App.js';
import { Provider } from 'react-redux';
import { store } from './app/store';
import { AppContextProvider } from './context/appContext.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <AppContextProvider>
        <Provider store={ store }>
            <App />
        </Provider>
    </AppContextProvider>
);

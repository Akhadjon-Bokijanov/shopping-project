import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Provider} from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import {store, persistor} from './redux/store';
import App from './App';
import { PersistGate } from "redux-persist/integration/react";
import * as serviceWorker from './serviceWorker';



ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
    <BrowserRouter>
      <PersistGate persistor={persistor}>
        <App />
      </PersistGate>
    </BrowserRouter>
  </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

serviceWorker.register();

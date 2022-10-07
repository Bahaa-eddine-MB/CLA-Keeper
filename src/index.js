import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App'
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux'
import { store } from './redux/sotre'
import { Persistor } from './redux/sotre';
import { PersistGate } from 'redux-persist/integration/react'
import { BrowserRouter } from 'react-router-dom'




const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={Persistor}>
      <BrowserRouter>
       <App/>
      </BrowserRouter>
    </PersistGate>
  </Provider>
);

reportWebVitals();

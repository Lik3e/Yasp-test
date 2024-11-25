import React from 'react';
import { Provider } from "react-redux";
import { store } from "./app/store";
import { createRoot } from 'react-dom/client';
import App from './App';

import './assets/main.css';

const container = document.getElementById("root")!;
const root = createRoot(container);

let appReady = Promise.resolve();

appReady.then(() => {
  root.render(
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>
  );
})

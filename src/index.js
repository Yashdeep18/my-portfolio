import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import ErrorBoundary from './ErrorBoundary';
import reportWebVitals from './reportWebVitals';
import { installGlobalErrorHandlers, reportError } from './errorReporting';

installGlobalErrorHandlers();

const container = document.getElementById('root');
if (!container) {
  throw new Error('Mount failed: no element with id "root" found in the document.');
}

const root = ReactDOM.createRoot(container);
root.render(
  <React.StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals().catch(error => reportError(error, { source: 'reportWebVitals' }));

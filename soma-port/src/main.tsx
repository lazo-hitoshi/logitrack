import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

// import.meta.env をApp側で直接触らないための逃げ道（環境によってはimport.meta参照が警告/エラーになるケースがあるため）
try {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (window as any).importMeta = import.meta;
} catch {
  // noop
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


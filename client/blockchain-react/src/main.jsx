import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { TransactionsProvider } from "./contexts/TransactionContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <TransactionsProvider>
    <App />
  </TransactionsProvider>
);

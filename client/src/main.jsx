import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './auth/AuthProvider.jsx';
import {CartProvider} from './auth/CartProvider.jsx';
import { ToastProvider } from './auth/ToastProvider.jsx';
import { PurchaseProvider } from './auth/PurchaseProvider.jsx';
createRoot(document.getElementById('root')).render(
  
  <StrictMode>
    <BrowserRouter>
    <ToastProvider>
     <AuthProvider>
        <CartProvider>
          <PurchaseProvider>
          <App />
          </PurchaseProvider>
        </CartProvider>
     </AuthProvider>
    </ToastProvider>
    </BrowserRouter>
  </StrictMode>,
)

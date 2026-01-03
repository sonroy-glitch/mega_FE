import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { CartProvider } from "./context/CartContext";
import "./index.css";
import {GoogleOAuthProvider} from '@react-oauth/google'
ReactDOM.createRoot(document.getElementById("root")).render(
    <GoogleOAuthProvider clientId='925554261380-6lappgj23eu39idl2s3pk642s9np5j74.apps.googleusercontent.com'>
  

  
  
    <BrowserRouter>
      <CartProvider>
        <App />
      </CartProvider>
    </BrowserRouter>
    </GoogleOAuthProvider>
  
);

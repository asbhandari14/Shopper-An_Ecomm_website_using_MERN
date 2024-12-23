import React from "react"
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import AppContextProvider from "./Context/ShopContext.jsx"
import { ToastContainer } from "react-toastify"


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <AppContextProvider>
        <App />
        <ToastContainer />
    </AppContextProvider>
)

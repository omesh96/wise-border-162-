
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react'
import { Provider } from 'react-redux';
import { store } from './Redux/store';
import AuthContextProvider from './Admin/context/Allcontext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
<AuthContextProvider>
<ChakraProvider>
   <BrowserRouter>
   <App />
   </BrowserRouter>
   </ChakraProvider>
</AuthContextProvider>
</Provider>
);

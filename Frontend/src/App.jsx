import * as React from 'react'
import './App.css'
import Routes from './routers/home.routes'
import {AuthContext} from './context/authContext';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return(
    <AuthContext>
      <ToastContainer />
      <Routes /> 
    </AuthContext>
  )
}

export default App

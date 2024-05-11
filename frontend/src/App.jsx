import { useState } from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import reactLogo from './assets/react.svg';
import './App.css';
import Login from './components/Login';
import Signup from './components/SignUp';
import ManageClients from './components/ManageClient';
function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    <Routes>
      <Route index element={< Login />} />
      <Route path='signup' element={<Signup/>}/>
      <Route path='manage' element={<ManageClients/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App

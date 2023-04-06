import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Route, Routes} from "react-router-dom";
import Layout from './Layout';
import LoginPage from './pages/LoginPage';
import IndexPage from './pages/IndexPage';


function App() {

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
      <Route index element={<IndexPage />} />
      <Route path="/login" element={<LoginPage />} />
      </Route>
    </Routes > 
   
 
  )
}

export default App

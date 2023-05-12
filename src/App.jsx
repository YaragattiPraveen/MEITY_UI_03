import React from 'react';
import Login1 from './components/Login1';
import Register from './components/Register';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import FarmerWrapper from './pages/FarmerWrapper';



function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* Login route */}
          <Route path='/' element={<Login1 />} />
          <Route path='register' element={<Register />} />
          {/* farmer route */}
          <Route path='farmer' element={<FarmerWrapper/>}/>
        </Routes>
      </BrowserRouter>
    </>

  );
}

export default App;
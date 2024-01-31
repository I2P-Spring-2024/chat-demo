import React from 'react';
import logo from './logo.svg';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ChatDemo from './pages/chatdemo';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element = {<ChatDemo />} />
        </Routes>
      </BrowserRouter> 
    </div>
  );
}

export default App;

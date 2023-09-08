import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Header from './components/Header';
import Stories from './pages/Stories';
import Creator from './pages/Creator';
import Community from './pages/Community';
import Subscribe from './pages/Subscribe';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route index path='/' element={<><Header/><Home/></>}></Route>
      <Route path='/stories' element={<><Header/><Stories/></>}></Route>
      <Route path='/creator' element={<><Header/><Creator/></>}></Route>
      <Route path='/community' element={<><Header/><Community/></>}></Route>
      <Route path='/subscribe' element={<><Header/><Subscribe/></>}></Route>
    </Routes>
    </BrowserRouter>

  );
}

export default App;

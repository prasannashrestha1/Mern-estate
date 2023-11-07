import React, { Profiler } from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Signins from './pages/Signins';
import Profile from './pages/Profile';
import About from './pages/About';
import Signups from './pages/Signups';
import Header from './components/Header';
import Footer from './components/Footer';
import PrivateRoute from './components/PrivateRoute';

export default function App() {
  return (
    
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/sign-in' element={<Signins />}></Route>
      <Route path='/sign-up' element={<Signups />}></Route>
      <Route path='/about' element={<About />}></Route>
      <Route element={<PrivateRoute />}>
      <Route path='/profile' element={<Profile />}></Route>
      </Route>
    </Routes>
    <Footer />
    </BrowserRouter>

  )
}

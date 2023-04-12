import React from 'react';
import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Ourstore from './pages/Ourstore';
import Blog from './pages/Blog';
import Compearproduct from './pages/Compearproduct';
import Wishlist from './pages/Wishlist';
import Login from './pages/Login';
import ForgotPassword from './pages/ForgotPassword';
import Singup from './pages/Singup';
import Resetpassword from './pages/Resetpassword';
import Singleblog from './pages/Singleblog';
import Privicypolicy from './pages/Privicypolicy';

import Termandcondition from './pages/Termandcondition';
import Shipingpolicy from './pages/Shipingpolicy';
import Policyrefan from './pages/Policyrefan';
import Singleproduct from './pages/Singleproduct';
import Cart from './pages/Cart';
import Chekout from './pages/Chekout';





function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/"  element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path="about" element={<About/>} />
        <Route path="contact" element={<Contact/>} />
        <Route path="store" element={<Ourstore/>} />
        <Route path="product/id" element={<Singleproduct/>} />

        <Route path="blogs" element={<Blog/>} />
        <Route path="blog/:id" element={<Singleblog/>} />
        <Route path="cart" element={<Cart/>} />
        <Route path="checkout" element={<Chekout/>} />

        <Route path="compare" element={<Compearproduct/>} />
        <Route path="wishlist" element={<Wishlist/>} />
        <Route path="login" element={<Login/>} />
        <Route path="forgot-password" element={<ForgotPassword/>} />
        <Route path="singup" element={<Singup/>} />
        <Route path="resetpass" element={<Resetpassword/>} />
        <Route path="privacy-policy" element={<Privicypolicy/>} />
        <Route path="refun-policy" element={<Policyrefan/>} />
        <Route path="shiping-policy" element={<Shipingpolicy/>} />
        <Route path="term-condition" element={<Termandcondition/>} />

      </Route>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;

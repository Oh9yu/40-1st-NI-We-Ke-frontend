import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Signup from '../src/pages/Signup/Signup';
import Nav from './components/Nav/Nav';
import Main from './pages/Main/Main';
import ProductList from './pages/ProductList/ProductList';
import ProductDetail from './pages/ProductDetail/ProductDetail';
import Payment from './pages/Payment/Payment';
import Footer from './components/Footer/Footer';
import Cart from './pages/Cart/Cart/Cart';
import WishList from './pages/WishList/WishList';

const Router = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/main" element={<Main />} />
        <Route path="/login" element={<Signup />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/productList" element={<ProductList />} />
        <Route path="/productDetail" element={<ProductDetail />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/WishList" element={<WishList />} />
        <Route path="/payment" element={<Payment />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;

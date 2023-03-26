import React from 'react';
import {Route, Routes as Switch} from 'react-router-dom';
import {AboutPage} from './components/About';
import {BlogPage} from './components/Blog';
import {CartPage} from './components/Cart';
import {ContactPage} from './components/Contact';
import {FeaturesPage} from './components/Features';
import {HomePage} from './components/Home';
import {ShopPage} from './components/Shop';
import {UserPage} from './components/User';
import {route} from './constants/route';

const PublicRoutes = [
  <Route key="main" path={'*'} element={<HomePage />} />,
  <Route key="features" path={route.features} element={<FeaturesPage />} />,
  <Route key="blog" path={route.blog} element={<BlogPage />} />,
  <Route key="shop" path={route.shop} element={<ShopPage />} />,
  <Route key="about" path={route.about} element={<AboutPage />} />,
  <Route key="contact" path={route.contact} element={<ContactPage />} />,
  <Route key="user" path={route.user} element={<UserPage />} />,
  <Route key="cart" path={route.cart} element={<CartPage />} />,
];

const Routes: React.FC = () => {
  return <Switch>{PublicRoutes}</Switch>;
};

export default Routes;

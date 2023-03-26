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
  <Route key="features" path={route.features.path} element={<FeaturesPage />} />,
  <Route key="blog" path={route.blog.path} element={<BlogPage />} />,
  <Route key="shop" path={route.shop.path} element={<ShopPage />} />,
  <Route key="about" path={route.about.path} element={<AboutPage />} />,
  <Route key="contact" path={route.contact.path} element={<ContactPage />} />,
  <Route key="user" path={route.user.path} element={<UserPage />} />,
  <Route key="cart" path={route.cart.path} element={<CartPage />} />,
];

const Routes: React.FC = () => {
  return <Switch>{PublicRoutes}</Switch>;
};

export default Routes;

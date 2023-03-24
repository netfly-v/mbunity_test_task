import React from 'react';
import {Route, Routes as Switch} from 'react-router-dom';
import {HomePage} from './components/Home';
// import {route} from './constants/route';

const PublicRoutes = [
  <Route key="main" path={'*'} element={<HomePage />} />,
  // <Route key="partner" path={route.partner.path} element={<PartnerPageContainer />} />,
  // <Route key="project" path={route.project.path} element={<ProjectPageContainer />} />,
];

const Routes: React.FC = () => {
  return <Switch>{PublicRoutes}</Switch>;
};

export default Routes;

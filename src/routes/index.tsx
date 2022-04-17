import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { RouteTypes } from './constants';
import PrivateRoute from './components/PrivateRoute';

import NotFoundPage from '../pages/NotFound';
import AuthenticationPage from '../pages/Authentication';
import Dashboard from '../pages/Dashboard';

interface IRouterProps {}

const Router: React.FunctionComponent<IRouterProps> = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={RouteTypes.BASE} element={<PrivateRoute />}>
                    <Route path={RouteTypes.BASE} element={<Navigate replace to={RouteTypes.DASHBOARD} />}></Route>
                    <Route path={RouteTypes.DASHBOARD} element={<Dashboard />} />
                </Route>
                <Route path={RouteTypes.LOGIN} element={<AuthenticationPage />} />

                {/* 404 route */}
                <Route path={RouteTypes.NOT_FOUND} element={<NotFoundPage />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;

import React, { lazy, Suspense } from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import { SuspenseComponent } from './components/Suspense/suspense';
import './assets/style/main.scss';

export const Home = lazy(() => import('./pages/home'));
export const AppRouter = () => {
    return (
        <Suspense fallback={<SuspenseComponent />}>
            <BrowserRouter>
                <Route path="/" exact component={Home} />

            </BrowserRouter>
        </Suspense>
    )
}
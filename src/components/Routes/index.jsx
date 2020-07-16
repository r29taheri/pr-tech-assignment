import React, { lazy, Suspense } from "react";

import { Route } from "react-router";
import { Switch } from "react-router-dom";

import LoadingScreen from "../LoadingScreen";

const HomeContainer = lazy(() => import("../../containers/Home"));
const NotFoundContainer = lazy(() => import("../../containers/NotFound"));

export const Routes = () => (
    <Switch>
        <Route exact path="/">
            <Suspense fallback={<LoadingScreen />}>
                <HomeContainer />
            </Suspense>
        </Route>
        <Route exact path="*">
            <Suspense fallback={<LoadingScreen />}>
                <NotFoundContainer />
            </Suspense>
        </Route>
    </Switch>
);

export default Routes;

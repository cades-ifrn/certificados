import React from "react";
import Loadable from "react-loadable";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import SplashScreen from "./components/SplashScreen";
import NotFound from "./pages/NotFound";

const AsyncHome = Loadable({
  loader: () => import("./pages/Home"),
  loading: SplashScreen
});
const AsyncView = Loadable({
  loader: () => import("./pages/View"),
  loading: SplashScreen
});

export default () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={AsyncHome} />
        <Route path="/view/:certificateId" component={AsyncView} />
        <Route path="/404" component={NotFound} />
        <Redirect to="/" />
      </Switch>
    </Router>
  );
};

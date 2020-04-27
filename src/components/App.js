import React, {Fragment} from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import otherRoutes from './routing/otherRoutes';
import Header from './layout/Header';
import Landing from './layout/Landing';
import Footer from './layout/Footer';
import history from './history';
import setAuthToken from 'components/utils/setAuthToken';

// Adds the token to the http header request.
if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const  App = () =>  {

  return (
      <Router history={history}>
        <Fragment>
          <Route path="/" component={Header} />
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route component={otherRoutes} />
          </Switch>
          <Route path="/" component={Footer} />
        </Fragment>
      </Router>
  );
}

export default App;

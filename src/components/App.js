import React, {Fragment} from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import otherRoutes from './routing/otherRoutes';
import Header from './layout/header';
import Landing from './layout/landing';
import Footer from './layout/footer';
import history from './history';
import setAuthToken from 'components/utils/setAuthToken';

// Adds the token to the http header request.
console.log ('Local storage test (App)');
if (localStorage.token) {
  console.log ('Local storage set');
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
          <Footer />
        </Fragment>
      </Router>
  );
}

export default App;

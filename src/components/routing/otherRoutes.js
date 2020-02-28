import React, { Fragment } from 'react';
import {Route, Switch} from 'react-router-dom';
import PrivateRoute from 'components/routing/PrivateRoute';
import Home from 'components/home/Home';
import Register from 'components/user/Register';
import Login from 'components/user/Login';
import Profile from 'components/user/Profile';
import Languages from 'components/user/Languages';
import Subjects from 'components/user/Subjects';


const routes = () => {

    return (
        <Fragment>
            <Switch>
                <Route path="/login" component={Login} />
                <PrivateRoute path="/home" component={Home} />
                <Route path="/tutor_register" component={Register} />
                <Route path="/tutor_profile" component={Profile} />
                <Route path="/student_register" component={Register} />
                <Route path="/student_profile" component={Profile} />
                <Route path="/parent_register" component={Register} />
                <Route path="/parent_profile" component={Profile} />
                <Route path="/languages" component={Languages} />
                <Route path="/subjects" component={Subjects} />
                <Route path="/verification_screen" component={Register} />
            </Switch>
        </Fragment>

    );

}

export default routes;

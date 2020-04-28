import React, { Fragment } from 'react';
import {Route, Switch} from 'react-router-dom';
import PrivateRoute from 'components/routing/PrivateRoute';
import Home from 'components/layout/Home';
import UserRegistration from 'components/user/UserRegistration';
import UserContactDetails from 'components/user/UserContactDetails';
import Login from 'components/user/UserLogin';
import ResetLoginDetails from 'components/user/UserResetLoginDetails';
import UserVerifyMedia from 'components/user/UserVerifyMedia';
import LegalInformation from 'components/general/LegalInformation';
import PathNotFound from 'components/general/PathNotFound';

const routes = () => {

    return (
        <Fragment>
            <Switch>
                <Route path="/login" component={Login} />
                <PrivateRoute path="/home" component={Home} />

                <Route path="/user-registration"         component={UserRegistration} />
                <Route path="/user-registration-parent"  component={UserRegistration} />
                <Route path="/user-registration-tutor"   component={UserRegistration} />
                <Route path="/user-registration-student" component={UserRegistration} />
                <Route path="/user-contact-details"      component={UserContactDetails} />
                <Route path="/reset-login-details"       component={ResetLoginDetails} />
                

                <Route path="/terms"                     component={LegalInformation} />
                <Route path="/privacy"                   component={LegalInformation} />
                <Route path="/cookie"                    component={LegalInformation} />

                <Route path="/verify-media/:verificationCode" component={UserVerifyMedia} />
                <Route path="/verify-media" component={UserVerifyMedia} />
                <Route path="/" component={PathNotFound} />
            </Switch>
        </Fragment>

    );

}

export default routes;

import React from 'react'
import {Route} from 'react-router-dom';
import PropTypes from 'prop-types'
import { connect} from 'react-redux';
import history from 'components/history';

const PrivateRoute = ({component: Component, login: {isAuthenticated, loading}, ...rest}) => (
    <Route {...rest} render={props => !isAuthenticated && !loading ? (history.push('/')) : (<Component {...props} /> ) } />
)

PrivateRoute.propTypes = {
    login: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    login: state.login
})

export default connect (mapStateToProps)(PrivateRoute);

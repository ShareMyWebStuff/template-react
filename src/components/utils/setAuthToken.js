import axios from 'axios';

// This checks if we have a token. If we do then add it the http header, otherwise remove it.
const setAuthToken = token => {
    if (token) {
        axios.defaults.headers.common['x-auth-token'] = token;
    } else {
        delete axios.defaults.headers.common['x-auth-token'];
    }
}

export default setAuthToken;

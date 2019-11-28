import React from 'react';

export const googleContext = React.createContext({
    cl_auth: null,
    cl_accountId: null,
    cl_loggedIn: false
});
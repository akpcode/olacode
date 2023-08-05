import React from 'react';

const authContext = React.createContext({
    authenticated: false,
    // The login is an empty anonymous function
    login: () =>{} 
});

export default authContext;
//This is used to pass data & state globally around multiple layers of components
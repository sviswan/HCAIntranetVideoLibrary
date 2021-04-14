import React from 'react';
import { hydrate } from 'react-dom';
import App from '../client/components/app';

/* Since this is an Isomorphic application, the application is being rendered 
on both client and server side. This file renders on the client side as 
server/routes/api/index.js is fetching and rendering via index.ejs on the server side. */
const videos = window.Data;
hydrate(<App videos={videos}/>, document.getElementById('root'));



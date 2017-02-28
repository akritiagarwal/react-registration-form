import React from 'react';
import {Route} from 'react-router';
import App from './components/App';
import Form from './components/form';

export default (
    <Route component={App}>
        <Route path='/' component={Form} />
    </Route>
);
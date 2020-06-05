import React from 'react';
import Home from '../pages/Home';
import MessageList from '../pages/Model/MessageList';

let routes = [
    {
        path: '/',
        component: Home,
        routes: [
            {
                path: '/pages/list',
                component: MessageList
            },
            { path: '/pages/model', component: () => <div>1213123123</div> }
        ],
    },
    { path: '/login', component: () => <div>login</div> }
]

export default routes;
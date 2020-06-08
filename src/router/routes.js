import React from 'react';
import Home from '../pages/Home';
import MessageList from '../pages/Model/MessageList';

let routes = [
    {
        path: '/',
        component: Home,
        // exact: true,
        routes: [
            {
                path: '/pages/list',
                component: MessageList,
                // exact: true
            },
            {
                path: '/pages/model',
                component: () => <div>1213123123</div>,
                // exact: true
            }
        ],
    },
    { path: '/login', component: () => <div>login</div> }
]

export default routes;
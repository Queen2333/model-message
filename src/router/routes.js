import Home from '../pages/Home'
import MessageList from '../pages/Model/MessageList'
let routes = [
    {
        path: '/pages',
        component: Home,
        routes: [
            {
                path: '/pages/home',
                component: MessageList,
            }
        ]
    }
]

export default routes
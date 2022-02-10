import Home from './home'
import Login from './login'
import Register from './register'
import TicketPage from './ticket_page'
import {Context} from "../index";
import Welcome from "./welcome";

export const public_routes = [
    {
        path: '/',
        element: <Home />
    },
    {
        path: '/login',
        element: <Login />
    },
    {
        path: '/register',
        element: <Register />
    },
    {
        path: '/ticket_page/:id',
        element: <TicketPage />
    },
    {   path:  '/welcome',
        element: <Welcome />
    }
]

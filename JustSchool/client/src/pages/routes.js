import Home from './home'
import Login from './login'
import Register from './register'
import TicketPage from './ticket_page'
import AboutUs from './aboutUs'
import MainPage from './mainPage'
import {Context} from "../index";

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
        path: '/aboutUs',
        element: <AboutUs />
    },
    {
        path: '/mainPage',
        element: <MainPage />
    },
    {
        path: '/ticket_page/:id',
        element: <TicketPage />
    }
]

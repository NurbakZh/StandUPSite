import React, {useContext} from 'react';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import Home from './home'
import Login from './login'
import Register from './register'
import TicketPage from './ticket_page'
import {Context} from "../index";
import {auth_routes, public_routes} from "./routes";

const PageRouter = () => {
    const {user} = useContext(Context)
    console.log(user)
    return (
        <Routes>
            {public_routes.map(({path,element}) =>
                <Route path={path} element={element} exact />
            )}
        </Routes>
    );
};

export default PageRouter;
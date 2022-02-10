import React, {createContext} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import UserStore from "./pages/UserStore";
import StandUpStore from "./pages/StandUpStore";

export const Context = createContext(null)

ReactDOM.render(
    <Context.Provider value={{
        user: new UserStore(),
        standups: new StandUpStore(),

    }}>
        <App />
    </Context.Provider>,
    document.getElementById('root')
);


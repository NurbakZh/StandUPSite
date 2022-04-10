import React, {createContext} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import UserStore from "./pages/UserStore";
import CourseStore from "./pages/CourseStore";  

export const Context = createContext(null)

ReactDOM.render(
    <Context.Provider value={{
        user: new UserStore(),
        courses: new CourseStore(),

    }}>
        <App />
    </Context.Provider>,
    document.getElementById('root')
);


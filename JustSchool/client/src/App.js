import React, {useContext, useEffect} from "react";
import PageRouter from "./pages/PageRouter";
import {BrowserRouter} from "react-router-dom";
import {Context} from "./index";
import {getStandUp} from "./http/CourseAPI";

const App = () => {
    return (
        <BrowserRouter>
          <PageRouter />
        </BrowserRouter>
    );
};

export default App;

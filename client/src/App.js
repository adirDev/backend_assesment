import React from 'react';
import {BrowserRouter} from "react-router-dom";

import axios from 'axios';

import Routes from 'routes';

axios.defaults.withCredentials = true;
axios.defaults.baseURL = 'http://localhost:3001/api/v1';

const App = () => {
    return (
        <BrowserRouter>
            <Routes/>
        </BrowserRouter>
    );
}

export default App;
import React from 'react';
import { BrowserRouter,Route } from 'react-router-dom'

import Landing from './pages/Landing';
import Register from './pages/Register';


function Routes(){
    return(
        <BrowserRouter>
        <Route path="/" exact component={Landing} />
        <Route path="/register" exact component={Register} />
        </BrowserRouter>
    )
}


export default Routes;
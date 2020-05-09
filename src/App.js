import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import './css/App.css';
import Home from './pages/Home.js'
import SouthAfrica from './pages/SouthAfrica.js'

const App = ()=>{

    return(
      <BrowserRouter>
        <Switch>
            <Route path='/'  exact component={Home} />
            <Route path='/SouthAfrica' exact  component={SouthAfrica} />

            <Route path='/'  render={ ()=> 
                <div> Page was not found: 404 </div>} 
            />
        </Switch>

      </BrowserRouter>
    )
}



export default App;








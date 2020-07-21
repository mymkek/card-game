import React from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import HomeContainer from "./containers/Home";
import GameFieldContainer from './containers/GameField';


const App:React.FC = () => {
   return (
      <BrowserRouter>
         <Switch>
           <Route exact path={'/'} component={HomeContainer}/>
           <Route exact path={'/game'} component={GameFieldContainer}/>
         </Switch>
      </BrowserRouter>
   );
};

export default App;

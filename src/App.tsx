import React from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import HomeContainer from "./components/Home";


const App:React.FC = () => {
   return (
      <BrowserRouter>
         <Switch>
           <Route exact path={'/'} component={HomeContainer}/>
         </Switch>
      </BrowserRouter>
   );
};

export default App;

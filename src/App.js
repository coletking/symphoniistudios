import React  from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Interview from './page/interview';
import Interview2 from './page/interview2';
import Maininterview from './page/maininterview';
import Newmain from  './page/newmain'

function App() {
  return (
   <Router>
     <Switch>
     <Route path = "/" component= {Interview}   exact/>
     <Route path = "/interview2" component= {Interview2}/>
     <Route path = "/maininterview" component= {Maininterview}/>
     <Route path = "/newmain" component= {Newmain}/>
     </Switch>
   </Router>
  );
}

export default App;



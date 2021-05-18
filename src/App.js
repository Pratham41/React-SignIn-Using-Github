import "./App.css";
import Login from "./Login";
import React from 'react';
import {BrowserRouter as Router, Redirect, Route} from "react-router-dom";
import {useStateValue} from "./StateProvider";
import Dashboard from "./Dashboard"; 


function App() {
  const [{user}, dispatch] = useStateValue();
  return (
    <div className="app">
     <Router>
       {!user ? <Redirect to = "/" /> : <Redirect to = "/dashboard" />}
       <Route exact path = "/" component = {Login}></Route>
       <Route exact path = "/dashboard" component = {Dashboard}></Route>
     </Router>
    </div>
  );
}

export default App;

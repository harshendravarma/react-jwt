import React from "react";
import "./App.css";
import Navbar from "./components/Navabar";
import MainBody from "./components/MainBody.jsx";
import Login from "./components/authentication/Login";
import Logout from "./components/authentication/Logout";
import { BrowserRouter as Router, Route} from "react-router-dom";

function App() {
  return (
   
    <Router>
    <div>
     <Navbar />

      <hr />

      <Route exact path="/" component={Login} />
      <Route path="/admin" component={MainBody} />
      <Route path="/logout" component={Logout} />
    </div>
  </Router>
  );
}

export default App;

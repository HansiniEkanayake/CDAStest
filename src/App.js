import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Register from './componenets/register/Register';
import Login from './componenets/login/Login';

function App() {
  return (
    <Router>
      <div>
        <Switch>

          <Route path="/Register">
            <Register />
          </Route>

          <Route path="/Login">
            <Login />
          </Route>



        </Switch>
      </div>
    </Router>
  )
}


export default App;


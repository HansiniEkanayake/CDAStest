import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Register from './componenets/register/Register';

function App() {
  return (
    <Router>
      <div>
        <Switch>

          <Route path="/Register">
            <Register />
          </Route>

        </Switch>
      </div>
    </Router>
  )
}


export default App;


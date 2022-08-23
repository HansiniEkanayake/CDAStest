import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import HomePage, {
  Navbar, 
  Header, 
  Features, 
  Download, 
  Subscribe, 
  Faq, 
  Footer} from './componenets/homepage';
import Register from './componenets/register/Register';
import Login from './componenets/login/Login';
import Dashboard from './componenets/dashboard/DashBoard';
import Categories from './componenets/categories/Categories';
import Vegetables from './componenets/vegetables/Vegetables';
import Fruit from './componenets/Fruit/Fruit';
import Spi from './componenets/spi/Spi';
import Alertform from './componenets/alertform/Alertform';
import CropDis from './componenets/cropdis/CropDis';
import Dis from './componenets/dis/Dis';
import Pest from './componenets/pest/Pest';
import Pm from './componenets/disDetails/pm';
import Sm from './componenets/disDetails/sm';



function App() {
  return (
    <Router>
     
      <div>
        <Switch>

          <Route path="/HomePage">
                <header className="header-bg"> 
                <Header/>
                </header>

                <Features/>   

                <Faq/>

                <Footer/> 
          </Route>


          <Route path="/Register">
                 <Register />
          </Route>


          <Route path="/Login">
                 <Login />
          </Route>
 

          <Route path="/Dashboard">
                 <Dashboard/>
          </Route>

          <Route path="/Categories">
                 <Categories/>
          </Route>

          <Route path="/Vegetables">
                 <Vegetables/>
          </Route>

          <Route path="/Fruit">
                 <Fruit/>
          </Route>

          <Route path="/Spi">
                 <Spi/>
          </Route>

          <Route path="/Alertform">
                 <Alertform/>
          </Route>

          <Route path="/CropDis">
                 <CropDis/>
          </Route>

          <Route path="/Dis">
                 <Dis/>
          </Route>

          <Route path="/Pest">
                 <Pest/>
          </Route>

          <Route path="/Pm">
                 <Pm/>
          </Route>

          <Route path="/Sm">
                 <Sm/>
          </Route>


          




        </Switch>
      </div>
    </Router>
  )
}


export default App;



import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import ListCylinder from './components/ListCylinder';
import ListCustomer from './components/ListCustomer';
import Admin from './components/Admin'
import Cylinder from './components/Cylinder'
import Login from './components/login.component'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Logout from './components/Logout';
import InsertCylinder from './components/InsertCylinder';
import UpdateCylinder from './components/UpdateCylinder';
import DeleteCylinder from './components/DeleteCylinder';
import ListGasBooking from './components/ListGasbooking';
import SurrenderCylinder from './components/SurrenderCylinder';
import UpdateSurrenderCylinder from './components/UpdateSurrenderCylinder';
import SignUp from './components/signup.component'
import logincustomer from './components/logincustomer';
import GasBookingCard from './components/GasBookingCard';
import BookGas from './components/BookGas';
import ManageBookings from './components/ManageBookings'
import LogoutCusstomer from './components/LogoutCustomer'
import Home from './components/Home';
import SurrenderList from './components/SurrenderList'


function App() {
  return (

<>
    <Router>
      <div>
      <Switch>
      <Route  path='/home' component={Home} />
        <Route  path='/adminlogin' component={Login} />
        <Route path="/insertcylinder" component={InsertCylinder} />
        <Route path="/updatecylinder" component={UpdateCylinder} />
        <Route path="/deletecylinder" component={DeleteCylinder} />
        <Route  path="/logout" component={Logout}></Route>
        <Route  path="/logoutcustomer" component={LogoutCusstomer}></Route>
        <Route path="/managecylinder"  component={Cylinder}/>
        <Route path="/Admin"  component={Admin}/>
        <Route  path="/viewgasbooking" component={ListGasBooking}></Route>
        <Route  path="/viewcustomer" component={ListCustomer}></Route>
        <Route  path="/viewcylinder" component={ListCylinder}></Route>
        <Route path="/insertsurrendercylinder" component={SurrenderCylinder} />
        <Route path="/updatesurrendercylinder" component={UpdateSurrenderCylinder} />
        <Route path='/signup' component={SignUp} />
        <Route exact path='/login' component={logincustomer} />
        <Route exact path='/gasbooking' component={GasBookingCard} />
        <Route path="/newbooking" exact component={BookGas}/>
         <Route path="/managebookings" exact component={ManageBookings}/>
         <Route path="/viewsurrendercylinder" exact component={SurrenderList}/>

        </ Switch>
        </div>
       <Footer />
       
  </Router> 
  
</>
  );
}

export default App;

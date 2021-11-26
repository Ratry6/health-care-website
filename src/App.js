import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Header from './components/Fixed-Route/Header/Header';
import Footer from './components/Fixed-Route/Footer/Footer';
import NotFound from './components/NotFound/NotFound';
import Register from './components/Rgister/Register';
import About from './components/About/About';
import AuthProvider from './context/AuthProvider';
import DetailsOnClick from './components/DetailsOnClick/DetailsOnClick';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Departments from './components/Departments/Departments';
import Appointment from './components/Appointment/Appointment';





function App() {
  return (
    <div className="App">
     <AuthProvider>
     <Router>
       <Header></Header>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="/home">
          <Home></Home>
        </Route>
        <Route path="/about"> 
        <About></About>
        </Route>
        <Route path="/appointment">
          <Appointment></Appointment>
        </Route>
        <PrivateRoute path="/details/:id">
          <DetailsOnClick></DetailsOnClick>
        </PrivateRoute>
        <Route path="/departments">
          <Departments></Departments>
        </Route>
        <Route path="/login">
          <Login></Login>
        </Route>
        <Route path="/register">
          <Register></Register>
        </Route>
        <Route path="*">
          <NotFound></NotFound>
        </Route>
      </Switch>
      <Footer></Footer>
     </Router>
     </AuthProvider>
    </div>
  );
}

export default App;

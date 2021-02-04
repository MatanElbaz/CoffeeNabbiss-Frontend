import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';
import Contact from './components/pages/Contact';
import My404Component from './components/pages/My404Component';
import logindemo from './components/logindemo';
import dashboard from './components/dashboard';
import ListProductComponent from './JSXcomponents/ListProductComponent';
import ViewProductComponent from './JSXcomponents/ViewProductComponent';
import Footer from './components/Footer';
import login from './JSXcomponents/login';

function App() {
  return (
    <>
      <Router className="App-header">
        <Navbar />
        <Switch>
        {/* <Route exact path="/" component={logindemo} /> */}
          <Route path='/products' component= { ListProductComponent } />
          <Route path = '/view-product/:id' component = { ViewProductComponent }></Route>
          <Route exact path="/dashboard" component={dashboard} />
          <Route path='/' exact component={Home} />
          <Route path='/services' component={Services} />
          <Route path='/contact' component={Contact} />
          <Route path='/login' component={login} />
          <Route path='/sign-up' component={SignUp} />
          <Route path='/404' component={My404Component} />
          <Redirect from='*' to='/404' />
          
          
          {/* <Route path = "/add-product/:id" component = {CreateProductComponent}></Route>
          <Route path = "/update-product/:id" component = {UpdateProductComponent}></Route> */}
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;

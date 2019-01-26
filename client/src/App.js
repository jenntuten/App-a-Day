import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
//186667235953-j2fte15v0l536qg9f09iqsuaiearrt4o.apps.googleusercontent.com
import Home from './components/Home/Home';
import About from './components/About/About';
import Error from './components/Error/Error';
import Navigation from './components/Navigation/Navigation';
import './App.css';
import FreeCode from './components/FreeCode/FreeCode';
import PageJscript from './components/pages/PageJscript';
import Login from './components/Login/Login';
import Learn from './components/Learn/Learn';
import Variables from './components/NewLessons/Variables';
import Loops from './components/NewLessons/Loops';
import Arrays from './components/NewLessons/Arrays';
import Resources from './components/Resources/Resources';

class App extends React.Component {

  render() {
    console.log('Logged In? ',this.props.isSignedIn)
    if (this.props.isSignedIn) {
      return (
        <div>
          <BrowserRouter>
            <div>
              <Navigation />
              <Switch> 
         <Route path="/" component={Home} exact />
         <Route path="/about" component={About} />
         <Route path="/freecode" component={FreeCode} />
         <Route path="/learn" component={Learn}/>
         <Route path="/login" component={Login}/>
         <Route path="/variables" component={Variables}/>
         <Route path="/arrays" component={Arrays}/>
         <Route path="/loops" component={Loops}/>
         <Route path="/jscript" component={PageJscript}/>
         <Route path="/resources" component={Resources}/>
         <Route path="" component={Error} />
       </Switch>
       </div>
       </BrowserRouter>
       </div>
      );
    }
    else {
      return (
        <div>
          <BrowserRouter>
            <div>
              <Navigation />
              <Switch> 
         <Route path="/" component={Home} exact />
         <Route path="/about" component={About} />
         <Route path="/freecode" component={Login} />
         <Route path="/learn" component={Login}/>
         <Route path="/login" component={Login}/>
         <Route path="/jscript" component={Login}/>
         <Route path="/resources" component={Login}/>
         <Route path="" component={Error} />
       </Switch>
       </div>
       </BrowserRouter>
       </div>
      )
    }
  }
}

const mapStateToProps = (state) => {
  return { isSignedIn: state.auth.isSignedIn };
};

export default connect(
  mapStateToProps,
   { }) (App);
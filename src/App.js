import React, {Component} from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Articles from './components/Articles/Articles';
import BeesHome from './components/BeesHome';
import Navbar from './components/Navbar/Navbar';
class App extends Component {
  render() {
    
    let routes = (
      <Switch>
        <Route path="/bees" component={BeesHome} />
        <Route path="/articles" component={Articles}/>
        <Route path="/" exact component={BeesHome} />
        <Redirect to="/"/>
        </Switch>
    );

    return (
      <React.Fragment>
        <Navbar/>
        {routes}
  </React.Fragment>
       )
  };
}

export default withRouter(App);

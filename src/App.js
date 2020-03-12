import React, {Component} from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import BeesHome from './components/BeesHome';

class App extends Component {
  render() {
    
    let routes = (
      <Switch>
        <Route path="/bees" component={BeesHome} />
        <Route path="/" exact component={BeesHome} />
        <Redirect to="/"/>
        </Switch>
    );

    return (
      <React.Fragment>
        {routes}
  </React.Fragment>
       )
  };
}

export default withRouter(App);

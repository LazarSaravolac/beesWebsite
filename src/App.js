import React, {Component} from 'react';
import Articles from './components/Articles/Articles';
import BeesHome from './components/BeesHome';
import Navbar from './components/Navbar/Navbar';
class App extends Component {
  render() {
    
    let components = (
        <>
        <BeesHome/>
        {/* <Articles /> */}
        </>
    );

    return (
      <React.Fragment>
        {components}
  </React.Fragment>
       )
  };
}

export default App;

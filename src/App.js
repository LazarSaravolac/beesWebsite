import React, {Component} from 'react';
import BeesHome from './components/BeesHome';
class App extends Component {
  render() {
    
    let components = (
        <>
        <BeesHome/>
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

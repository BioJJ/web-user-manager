import React from 'react';

import 'bootswatch/dist/flatly/bootstrap.css';
import '../globalstyle.css';

import Routes from './routes';
import NavBar from '../components/navBar';

class App extends React.Component {
  render() {
    return (

      <>
        <NavBar />
        <div className="container">
          <Routes />
        </div>
      </>
    )
  }
}

export default App;
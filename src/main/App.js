import React from 'react';

import 'toastr/build/toastr.min'

import 'bootswatch/dist/flatly/bootstrap.css';
import '../globalstyle.css';
import 'toastr/build/toastr.css'

import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

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
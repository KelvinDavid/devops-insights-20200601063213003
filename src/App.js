import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppHeader from './components/AppHeader';
import AppContainer from './containers/AppContainer';
import InitMap from './InitMap';
import './App.css';


function App() {
  return (
    <div className="App">
      <AppHeader />
      <AppContainer />
      <InitMap />
    </div>
  );
}


export default App;

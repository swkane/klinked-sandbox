import React from "react";
import "./App.css";
import { Route, Switch } from 'react-router-dom';
//gives you access to theme variables inside your components
import ProfilePage from './components/ProfilePage';
import BaseLayout from './components/BaseLayout';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
    <BaseLayout>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/profile' component={ProfilePage}/>
      </Switch>
    </BaseLayout>
  </div>

  );
}

export default App;

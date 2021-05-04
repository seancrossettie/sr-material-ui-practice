import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Contact from '../components/Contact';
import Home from '../components/Home';
import About from '../components/About';

export default function Routes() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/about/' component={About} />
        <Route exact path='/contact/' component={Contact} />
      </Switch>
    </div>
  );
}

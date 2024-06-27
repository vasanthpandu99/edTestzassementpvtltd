import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import Booking from './components/Booking';
import AppointmentHistory from './components/AppointmentHistory';
import NotFound from './components/NotFound';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/signup" component={SignUp} />
        <Route path="/signin" component={SignIn} />
        <Route path="/booking" component={Booking} />
        <Route path="/appointments" component={AppointmentHistory} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
};

export default App;
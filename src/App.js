import React from 'react';
import Index from './pages/Index';
import AdminIndex from './pages/admin/AdminIndex'
import Orders from './pages/admin/Orders'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {

  return (
    <Router>

      <Switch>
        <Route exact path="/">
          <Index />
        </Route>
        <Route path="/admin/">

          <AdminIndex />
        </Route>
        <Route path="/orders/">
          <Orders />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

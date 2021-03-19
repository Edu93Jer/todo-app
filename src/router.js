import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import CreateList from './pages/CreateList';
import Home from './pages/Home'


const AppRouter = () => (
  <Router>
    <Route exact component={Home} path="/" />
    <Route exact component={CreateList} path="/createlist" />
  </Router>
)

export default AppRouter;

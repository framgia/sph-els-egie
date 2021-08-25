import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from './Header';
import Dashboard from './pages/Dashboard';
import WordsLearned from './pages/WordsLearned';
import Category from './pages/Category';
import UserList from './pages/UserList';
import UserProfile from './pages/UserProfile';

const App = () => {
  return (
    <div className='ui container'>
      <Router>
        <Header />
        <Switch>
          <Route path='/' exact component={Dashboard} />
          <Route path='/words-learned' component={WordsLearned}></Route>
          <Route path='/categories' component={Category}></Route>
          <Route path='/categories' component={Category}></Route>
          <Route path='/user-list' component={UserList}></Route>
          <Route path='/user-profile/:id' component={UserProfile}></Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;

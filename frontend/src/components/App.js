import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import axios from 'axios';

import Header from './Header';
import Dashboard from './pages/Dashboard';
import WordsLearned from './pages/WordsLearned';
import Category from './pages/Category';
import UserList from './pages/UserList';
import UserProfile from './pages/UserProfile';
import Register from './pages/Register';

axios.defaults.withCredentials = true;

const App = () => {
  return (
    <div className='ui container'>
      <Router>
        <Switch>
          <Route path='/register'>
            {localStorage.getItem('auth_token') ? <Redirect to ='/' /> : <Register /> }
          </Route>    
          <Header />
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

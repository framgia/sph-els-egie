import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import axios from 'axios';

import Header from './Header';
import Dashboard from './pages/Dashboard';
import WordsLearned from './pages/WordsLearned';
import Category from './pages/Category';
import UserList from './pages/UserList';
import UserProfile from './pages/UserProfile';
import Register from './pages/Register';
import Login from './pages/Login';

axios.defaults.baseURL = 'http://127.0.0.1:8000/';
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.post['Accept'] = 'application/json';

axios.defaults.withCredentials = true;

const App = () => {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <div className='ui container'>
            <Route path='/' exact component={Dashboard} />
            <Route path='/register' exact component={Register} />
            <Route path='/login' exact component={Login} />
            <Route path='/words-learned' component={WordsLearned}></Route>
            <Route path='/categories' component={Category}></Route>
            <Route path='/user-list' component={UserList}></Route>
            <Route path='/user-profile/:id' component={UserProfile}></Route>
          </div>
        </Switch>
      </Router>
    </div>
  );
};

export default App;

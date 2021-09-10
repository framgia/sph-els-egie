import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import axios from 'axios';
import Cookies from 'js-cookie';

import Header from './Header';
import Dashboard from './pages/Dashboard';
import WordsLearned from './pages/WordsLearned';
import Category from './pages/Category';
import UserList from './pages/UserList';
import UserProfile from './pages/UserProfile';
import Register from './pages/Register';
import Login from './pages/Login';

axios.defaults.withCredentials = true;

const App = () => {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <React.Fragment>
            <div className='ui container'>
              <Route path='/register'>
                { Cookies.get('auth_token') ? <Redirect to='/' /> : <Register /> }
              </Route>
              <Route path='/login'>
                { Cookies.get('auth_token') ? <Redirect to='/' /> : <Login /> }
              </Route>
              <Route path='/' exact component={Dashboard} />
              <Route path='/words-learned' component={WordsLearned}></Route>
              <Route path='/categories' component={Category}></Route>
              <Route path='/categories' component={Category}></Route>
              <Route path='/user-list' component={UserList}></Route>
              <Route path='/user-profile/:id' component={UserProfile}></Route>
            </div>
          </React.Fragment>
        </Switch>
      </Router>
    </div>
  );
};

export default App;

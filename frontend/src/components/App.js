import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './Header';
import Dashboard from './pages/Dashboard';
import WordsLearned from './pages/WordsLearned';
import Category from './pages/Category';

const App = () => {
  return (
    <div className='ui container'>
      <BrowserRouter>
        <div>
          <Header />
          <Route path='/' exact component={Dashboard} />
          <Route path='/words-learned' component={WordsLearned}></Route>
          <Route path='/categories' component={Category}></Route>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;

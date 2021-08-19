import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './Header';
import Dashboard from './pages/Dashboard';

const App = () => {
  return (
    <div className='ui container'>
      <BrowserRouter>
        <div>
          <Header />
          <Route path='/' exact component={Dashboard} />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;

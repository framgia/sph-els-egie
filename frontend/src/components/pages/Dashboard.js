import React from 'react';
import Activity from '../Activity';
import DashboardDetail from '../DashboardDetail';

const Dashboard = () => {
  return (
    <div className='ui grid'>
      <div className='four wide column'>
        <DashboardDetail
          path='/words-learned'
          word='Learned 20 words'
          lesson='Learned 5 lessons'
        />
      </div>

      <div className='twelve wide column'>
        <Activity/>
      </div>
    </div>
  );
};

export default Dashboard;

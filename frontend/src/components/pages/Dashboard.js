import React from 'react';
import { Link } from 'react-router-dom';
import Activity from '../Activity';

const Dashboard = () => {
  return (
    <div className='ui grid'>
      <div className='four wide column'>
        <div className='ui items'>
          <div className='item'>
            <div className='tiny ui image'>
              <img src='https://i.pravatar.cc/150?img=5' alt='' />
            </div>
            <div className='content'>
              <div className='text-xl'>John Doe</div>
              <div>
                <Link to='/'>Learned 20 words</Link>
              </div>
              <div>
                <Link to='/'>Learned 5 lessons</Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='twelve wide column'>
        <Activity title='Activites' />
      </div>
    </div>
  );
};

export default Dashboard;

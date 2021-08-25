import React from 'react';
import Activity from '../Activity';
import UserDetail from '../UserDetail';

const UserProfile = () => {
  return (
    <div className='ui grid'>
      <div className='four wide column'>
        <UserDetail />
      </div>

      <div className='twelve wide column'>
        <Activity />
      </div>
    </div>
  );
};

export default UserProfile;

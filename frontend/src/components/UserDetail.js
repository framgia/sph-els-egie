import React from 'react';
import { Link } from 'react-router-dom';

const UserDetail = () => {
  return (
    <div className='ui card border-0'>
      <div className='image'>
        <img src='https://i.pravatar.cc/150?img=3' alt='avatar' />
      </div>
      <div className='content center aligned'>
        <div className='header border-b-2 p-4'>John Doe</div>
        <div className='description p-4'>
          <div className='ui grid'>
            <div className='eight wide column'>
              <div>50</div>
              <div>Followers</div>
            </div>
            <div className='eight wide column'>
              <div>20</div>
              <div>Following</div>
            </div>
          </div>
        </div>
        <button class="fluid ui primary button mt-4">Follow</button>
      </div>
      <div class='extra content center aligned'>
        <div>
          <Link to='/'>Learned 20 words</Link>
        </div>
        <div>
          <Link to='/'>Learned 5 lessons</Link>
        </div>
      </div>
    </div>
  );
};

export default UserDetail;

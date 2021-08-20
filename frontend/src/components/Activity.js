import React from 'react';
import { Link } from 'react-router-dom';

const Activity = ({ title }) => {
  return (
    <div className='border-2 p-6'>
      <div className='text-xl font-semibold border-b-2 pb-3'>{title}</div>
      <div className='ui divided items'>
        <div className='item'>
          <div className='ui tiny image'>
            <img src='https://i.pravatar.cc/150?img=3' alt='avatar' />
          </div>
          <div className='middle aligned content'>
            <div>
              <Link to='/'>You</Link> learned 20 of 20 wrds in{' '}
              <Link href='/'>Basic 500</Link>
            </div>
            <div>2 days ago</div>
          </div>
        </div>

        <div className='item'>
          <div className='ui tiny image'>
            <img src='https://i.pravatar.cc/150?img=1' alt='avatar' />
          </div>
          <div className='middle aligned content'>
            <div>
              <Link to='/'>You</Link> learned 20 of 20 wrds in{' '}
              <Link href='/'>Basic 500</Link>
            </div>
            <div>2 days ago</div>
          </div>
        </div>

        <div className='item'>
          <div className='ui tiny image'>
            <img src='https://i.pravatar.cc/150?img=2' alt='avatar' />
          </div>
          <div className='middle aligned content'>
            <div>
              <Link to='/'>You</Link> learned 20 of 20 wrds in{' '}
              <Link href='/'>Basic 500</Link>
            </div>
            <div>2 days ago</div>
          </div>
        </div>

        <div className='item'>
          <div className='ui tiny image'>
            <img src='https://i.pravatar.cc/150?img=4' alt='avatar' />
          </div>
          <div className='middle aligned content'>
            <div>
              <Link to='/'>You</Link> learned 20 of 20 wrds in{' '}
              <Link href='/'>Basic 500</Link>
            </div>
            <div>2 days ago</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Activity;

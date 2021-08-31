import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

const UserDetail = () => {
  const [user, setUser] = useState([]);

  const { userId } = useParams();
  const fetchUser = async () => {
    const res = await axios.get(`/api/user-profile/${userId}`);
    if (res.data.status === 200) {
      setUser(res.data.user);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  const followButton = (
    <button className='fluid ui blue button mt-4'>Follow</button>
  );

  const user_avatar =
    user.avatar === null
      ? `http://127.0.0.1:8000/storage/images/default-profile-pic.png`
      : `http://127.0.0.1:8000/storage/images/${user.avatar}`;

  return (
    <React.Fragment>
      <div className='ui card border-0'>
        <div className='image'>
          <img src={user_avatar} alt={user.name} />
        </div>
        <div className='content center aligned'>
          <div className='header border-b-2 p-4'>{user.name}</div>
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
          {parseInt(userId) === user.id ? '' : followButton}
        </div>
        <div className='extra content center aligned'>
          <div>
            <Link to='/'>Learned 20 words</Link>
          </div>
          <div>
            <Link to='/'>Learned 5 lessons</Link>
          </div>
        </div>
      </div>
      <Link to={`/edit-profile/${userId}`} className='fluid ui blue button mt-4'>Update Profile</Link>
    </React.Fragment>
  );
};

export default UserDetail;

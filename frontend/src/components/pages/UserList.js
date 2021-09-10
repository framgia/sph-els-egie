import React, { useState, useEffect } from 'react';
import UserItem from '../UserItem';
import UserListAPI from '../../apis/UserListAPI';

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    UserListAPI.displayUsers().then((res) => {
      if (res.data.status === 200) {
        setUsers(res.data.users);
        setLoading(false);
      }
    });
  }, []);

  return (
    <table className='ui striped table'>
      <thead>
        <tr>
          <th>Username</th>
          <th>Name</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        {loading ? (
          <tr>
            <td colSpan='7'>
              <h2>Loading...</h2>
            </td>
          </tr>
        ) : (
          users.map((user) => <UserItem user={user} key={user.id} />)
        )}
      </tbody>
    </table>
  );
};

export default UserList;

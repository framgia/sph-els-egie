import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UserItem from '../UserItem';

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchUsers = async () => {
    const response = await axios.get('http://127.0.0.1:8000/api/user-list');

    if (response.data.status === 200) {
      setUsers(response.data.users);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
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

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchUsers = async () => {
    const response = await axios.get('/api/user-list');

    if (response.data.status === 200) {
      setUsers(response.data.users);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const userlist_HTMLTABLE = users.map((user) => (
    <tr key={user.id}>
      <td data-label='Username'>
        <Link to={`/user-profile/${user.id}`}>{user.username}</Link>
      </td>
      <td data-label='Name'>{user.name}</td>
      <td data-label='Email'>{user.email}</td>
    </tr>
  ));

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
          userlist_HTMLTABLE
        )}
      </tbody>
    </table>
  );
};

export default UserList;

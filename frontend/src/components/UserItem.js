import React from 'react';
import { Link } from 'react-router-dom';

const UserItem = ({ user }) => {
  return (
    <tr>
      <td data-label='Username'>
        <Link to={`/user-profile/${user.username}`}>{user.username}</Link>
      </td>
      <td data-label='Name'>{user.name}</td>
      <td data-label='Email'>{user.email}</td>
    </tr>
  );
};

export default UserItem;

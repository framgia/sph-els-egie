import API from './Base';

const UserListAPI = {
  displayUsers: () => {
    const options = {
      method: 'GET',
      url: '/user-list',
    };

    return API.request(options);
  },
};

export default UserListAPI;

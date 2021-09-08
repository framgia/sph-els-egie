import API from './Base';

const LogoutAPI = () => {
  const logout = () => {
    API.post('/logout').then((res) => {
      if (res.data.status === 200) {
        localStorage.removeItem('auth_token');
        localStorage.removeItem('auth_name');
        window.location = '/login';
      }
    });
  };

  return {
    logout,
  };
};

export default LogoutAPI();

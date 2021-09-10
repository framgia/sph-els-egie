import API from './Base';
import Cookies from 'js-cookie';

const LogoutAPI = () => {
  const logout = () => {
    API.post('/logout').then((res) => {
      if (res.data.status === 200) {
        Cookies.remove('auth_token');
        Cookies.remove('auth_name');
        window.location = '/login';
      }
    });
  };

  return {
    logout,
  };
};

export default LogoutAPI();

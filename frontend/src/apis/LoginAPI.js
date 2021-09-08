import API from './Base';

const LoginAPI = {
  saveLogin: (payload) => {
    const options = {
      method: 'POST',
      url: '/login',
      data: payload,
    };

    return API.request(options);
  },
};

export default LoginAPI;

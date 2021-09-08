import API from './Base';

const RegisterAPI = {
  saveRegister: (payload) => {
    const options = {
      method: 'POST',
      url: '/register',
      data: payload,
    };

    return API.request(options);
  },
};

export default RegisterAPI;

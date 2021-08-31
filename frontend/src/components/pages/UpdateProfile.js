import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import axios from 'axios';

const UpdateProfile = () => {
  const { userId } = useParams();
  const history = useHistory();

  const [editInput, setEditInput] = useState({
    name: '',
    email: '',
    username: '',
  });
  const [avatar, setAvatar] = useState([]);
  const [errorValidation, setErrorValidation] = useState([]);

  const handleInput = (e) => {
    e.persist();
    setEditInput({ ...editInput, [e.target.name]: e.target.value });
  };

  const handleImage = (e) => {
    setAvatar({ avatar: e.target.files[0] });
  };

  useEffect(() => {
    axios.get(`/api/edit-profile/${userId}`).then((res) => {
      if (res.data.status === 200) {
        setEditInput(res.data.user);
      }
    });
  }, [userId]);

  const updateUser = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('avatar', avatar.avatar);
    formData.append('name', editInput.name);
    formData.append('username', editInput.username);
    formData.append('email', editInput.email);

    axios.post(`/api/update-profile/${userId}`, formData).then((res) => {
      if (res.data.status === 200) {
        console.log(res.data.message);
        history.push(`/user-profile/${res.data.user.id}`);
      } else if (res.data.status === 404) {
        console.log(res.data.message);
      } else {
        setErrorValidation(res.data.validation_errors);
      }
    });
  };

  return (
    <div className='pt-5'>
      <div className='ui center aligned grid'>
        <div className='seven wide column'>
          <h2 className='ui blue header'>
            <div className='content'>Edit Profile</div>
          </h2>
          <form onSubmit={updateUser} className='ui large form'>
            <div className='ui segment'>
              <div className='field'>
                <label className='text-left'>Name</label>
                <div className='ui left icon input mt-5'>
                  <i className='user icon'></i>
                  <input
                    type='text'
                    name='name'
                    value={editInput.name}
                    onChange={handleInput}
                    placeholder='Name'
                  />
                </div>
                <span>{errorValidation.name}</span>
                <label className='pt-3 text-left'>Profile Picture</label>
                <div className='ui left icon input mt-2'>
                  <i className='image icon'></i>
                  <input
                    type='file'
                    name='avatar'
                    value={avatar.name}
                    onChange={handleImage}
                    placeholder='Avatar'
                  />
                </div>
                {/* <span>{editInput.error_list.avatar}</span> */}
                <label className='pt-3 text-left'>E-Mail</label>
                <div className='ui left icon input mt-2'>
                  <i className='mail icon'></i>
                  <input
                    type='email'
                    name='email'
                    value={editInput.email}
                    onChange={handleInput}
                    placeholder='E-Mail'
                  />
                </div>
                <span>{errorValidation.email}</span>
                <label className='pt-3 text-left'>Username</label>
                <div className='ui left icon input mt-2'>
                  <i className='user outline icon'></i>
                  <input
                    type='text'
                    name='username'
                    value={editInput.username}
                    onChange={handleInput}
                    placeholder='Username'
                  />
                </div>
                <span>{errorValidation.username}</span>
              </div>
            </div>
            <button type='submit' className='ui fluid large blue button'>
              Update
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateProfile;

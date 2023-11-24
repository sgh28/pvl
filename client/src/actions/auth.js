
import * as api from '../api/index.js';
import { auth } from '../reducer/auth.js';
export const signin = (formData,navigate) => async (dispatch) => {
    try {
      const { data } = await api.signIn(formData);
      
      console.log(data?.result);
      dispatch(auth(data?.result));
      localStorage.setItem('profile', JSON.stringify({token:data }));
      navigate('/settings');

    } catch (error) {
      
      console.log(error.response);
    }
  };

  export const signup = (formData,navigate) => async (dispatch) => {
    try {
      const { data } = await api.signUp(formData);
      
      dispatch(auth(data?.result));
      localStorage.setItem('profile',JSON.stringify({token: data}));
      navigate('/settings');
  
    } catch (error) {
      console.log(error.response);
    }
  };
  
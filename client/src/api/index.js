import axios from "axios";

const API = axios.create({ baseURL: 'http://localhost:4000' });
API.interceptors.request.use((req) => {
    if (localStorage.getItem('profile')) {
      console.log(JSON.parse(localStorage.getItem('profile')).token.token);
      req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token.token}`;
    }
    
    return req;
  });


export const signIn = (formData) => API.post('/people/signin', formData);
export const signUp = (formData) => API.post('/people/signup', formData);
export const get_all_people = () => API.get('/people/');
export const get_num_of_users = () => API.get('/numOfUsers');  
export const update = (formData) => API.patch(`/people/${formData.email}`,formData);
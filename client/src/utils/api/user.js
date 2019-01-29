import axios from 'axios';

export default {
    createUser: (userData) => axios.post('/api/user/create', userData),
    loginUser: (userData) => axios.post('/api/user/login', userData),
    savePersonality: (userData) => axios.put('/api/user/personality', userData),
    activateUser: (userData) => axios.put('/api/user/activateUser', userData),
    saveHobbies: (userData) => axios.put('/api/user/hobbies', userData),
    checkUser: (userData) => axios.get('/api/user/users', userData),
    getMeetUp: (zipcode, hobbylink) => axios.get(`api/user/getMeetUp/${zipcode}/${hobbylink}`),

}
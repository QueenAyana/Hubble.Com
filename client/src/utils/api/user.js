import axios from 'axios';

export default {
    createUser: (userData) => axios.post('/api/user/create', userData),
    loginUser: (userData) => axios.post('/api/user/login', userData),
    savePersonality: (userData) => axios.put('/api/user/personality', userData),
    saveHobbies: (userData) => axios.put('/api/user/hobbies', userData),

    //should the save... be a put call or a post call???
}
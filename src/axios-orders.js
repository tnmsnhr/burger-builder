import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-321ca.firebaseio.com/'
});

export default instance;
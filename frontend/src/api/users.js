import axios from "axios";

const usersApi = axios.create({
    baseURL: 'http://localhost:3000/api/users'
});

export default usersApi;
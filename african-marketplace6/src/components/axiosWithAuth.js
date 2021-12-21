import axios from 'axios';

const axiosWithAuth = ()=> {
    const token = localStorage.getItem('token');

    return axios.create({
        headers: {
            authorization: token
        },
        // baseURL: "http://localhost:?/api"
    });
}

export default axiosWithAuth;
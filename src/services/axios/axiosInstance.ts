

import axios from 'axios';



const axiosInstance = axios.create({
    baseURL: 'http://localhost:4000/jobs',
    // baseURL: 'http://localhost:4000',
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
})

export default axiosInstance


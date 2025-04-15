

import axios from 'axios';



const axiosInstance = axios.create({
  baseURL: 'https://jobportalserver.prasoonpr.tech/jobs',
  // baseURL: 'http://localhost:4000/jobs',
    // baseURL: 'https://jobportalserver.noorulameen.tech',
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
})

export default axiosInstance


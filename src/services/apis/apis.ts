// src/services/apis/apis.ts
import axiosInstance from '@/services/axios/axiosInstance';

/**
 * Create Job API - handles form data with image upload
 */
export const jobCreation = async (formData: FormData) => {
  try {
    const response = await axiosInstance.post('https://jobportalserver.prasoonpr.tech/jobs', formData); // DO NOT set Content-Type manually
    return response.data;
  } catch (error) {
    console.error('Error creating job:', error);
    throw error;
  }
};

/**
 * Fetch all jobs
 */
export const fetchJobs = async () => {
  try {
    const response = await axiosInstance.get('https://jobportalserver.prasoonpr.tech/jobs');
    return response.data;
  } catch (error) {
    console.error('Error fetching jobs:', error);
    throw error;
  }
};

/**
 * Fetch jobs with filters
 */
export const fetchFiltering = async (filters: Record<string, string>) => {
  try {
    const query = new URLSearchParams();

    for (const [key, value] of Object.entries(filters)) {
      if (value) query.append(key, value);
    }

    const response = await axiosInstance.get(`https://jobportalserver.prasoonpr.tech/jobs?${query.toString()}`);
    return response.data;
  } catch (error) {
    console.error('Error filtering jobs:', error);
    throw error;
  }
};






// import axiosInstance from '@/services/axios/axiosInstance'

// /**
//  * job create form api
//  */

// export const jobCreation = async(formData: FormData)=>{
//     try {
//         console.log("check formdata api " ,formData)
//         const response = await axiosInstance.post("http://localhost:3000",formData)
//         return response
//     } catch (error) {
//         console.error('Error:', error);
//         throw error;
//     }
// }

// /**
//  * fetch jobs
//  */

// export const fetchJobs = async()=>{
//     try {
//         const response = await axiosInstance.get("http://localhost:3000")
//         return response.data

//     } catch (error) {
//         console.error('Error:', error);
//         throw error;
//     }
// }

// /**
//  * fetch filtering
//  */

// export const fetchFiltering = async(queryParams: string)=>{
//     try {
//         const response = await axiosInstance.get(`http://localhost:3000?${queryParams}`)
//         return response
//     } catch (error) {
//         console.error('Error:', error);
//         throw error;
//     }
// }





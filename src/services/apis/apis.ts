import axiosInstance from '@/services/axios/axiosInstance'

/**
 * job create form api
 */

export const jobCreation = async(formData: FormData)=>{
    try {
        console.log("check formdata api " ,formData)
        const response = await axiosInstance.post("http://localhost:3000",formData)
        return response
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
}

/**
 * fetch jobs
 */

export const fetchJobs = async()=>{
    try {
        const response = await axiosInstance.get("http://localhost:3000")
        return response.data

    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
}

/**
 * fetch filtering
 */

export const fetchFiltering = async(queryParams: string)=>{
    try {
        const response = await axiosInstance.get(`http://localhost:3000?${queryParams}`)
        return response
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
}





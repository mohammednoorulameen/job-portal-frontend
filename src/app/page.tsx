


"use client";

import Navbar from "@/Components/Navbar/Navbar";
import { Container } from "@mantine/core";
import React, { useEffect, useState, useCallback } from "react";
import JobFilter from "@/app/jobs/JobFilter/JobFilter";
import JobListing from "./jobs/JobListing/JobListing";
import { JobType } from "@/types/index";
import { fetchFiltering, fetchJobs } from "@/services/apis/apis";

const Home: React.FC = () => {
  const [filteredJobs, setFilteredJobs] = useState<JobType[]>([]);

  /**
   * Fetch jobs on mount
   */
  // useEffect(() => {
  //   const getJobs = async () => {
  //     try {
  //       const response = await fetchJobs();

  //       if (!response || !response.data) {
  //         throw new Error("Failed to fetch jobs");
  //       }
  //       // const data = await response.json();
  //       console.log("Fetched Jobs:", response);
  //       setFilteredJobs(response.data);
  //     } catch (error) {
  //       console.error("Error fetching jobs:", error);
  //     }
  //   };

  //   getJobs();
  // }, []);

  useEffect(() => {
    const getJobs = async () => {
      try {
        const data = await fetchJobs(); // `data` is the actual jobs array/object
  
        if (!data) {
          throw new Error("Failed to fetch jobs");
        }
  
        console.log("Fetched Jobs:", data);
        setFilteredJobs(data);
      } catch (error) {
        console.error("Error fetching jobs:", error);
      }
    };
  
    getJobs();
  }, []);
  

  /**
   * Handle Filtering - Memoized using useCallback
   */
  const handleFilter = useCallback(async (filters: Record<string, string>) => {
    try {
      console.log("Filters applied:", filters);

      const queryParams = new URLSearchParams(filters).toString();
      const response = await fetchFiltering(queryParams);

      if (!response || !response.data) {
        throw new Error("Failed to fetch filtered jobs");
      }

      const fetchdata: JobType[] = Array.isArray(response.data)
        ? response.data
        : response.data.jobs;

      console.log("Filtered data:", fetchdata);
      setFilteredJobs(fetchdata);
    } catch (error) {
      console.error("Error fetching filtered jobs:", error);
    }
  }, []);

  return (
    <main>
      <Navbar />
      <Container size="xl">
        <JobFilter onFilter={handleFilter} />
        <JobListing jobs={filteredJobs} /> {/* ✅ Ensure JobListing accepts jobs */}
      </Container>
    </main>
  );
};

export default Home;

// "use client";

// import Navbar from '@/Components/Navbar/Navbar'
// import { Container } from '@mantine/core'
// import React, { useEffect, useState } from 'react'
// import JobFilter from '@/app/jobs/JobFilter/JobFilter'
// import JobListing from './jobs/JobListing/JobListing'
// import { JobType } from '@/types/index'
// import { fetchFiltering, fetchJobs } from '@/services/apis/apis'

// const Home = () => {
//   const [ filteredJobs,setFilteredJobs ] = useState<JobType[]>([]);

//   useEffect(()=>{
//     const getJobs = async () =>{
//       const response = await fetchJobs();
 
//       console.log("check rewsponse list",response)

//       if(!response){
//         throw new Error ("failed to fetching")
//       }

//       const fetchingData = await response;
//       console.log("fetchingDatafetchingData" , fetchingData.data)
//       setFilteredJobs(fetchingData.data)
//     }
//     getJobs()
//   }, [])

// /**
//  * handle flitering
//  */

//   const handleFilter = async (filters: any) => {
//     try {
//       console.log("Filters applied:", filters);
  
//       const queryParams = new URLSearchParams(filters).toString();
      
//       const response = await fetchFiltering(); 
      
//       if (!response || !response.data) {
//         throw new Error("Failed to fetch filtered jobs");
//       }
  
//       // Extract only the data part
//       const fetchdata: JobType[] = Array.isArray(response.data) ? response.data : response.data.jobs;
      
//       console.log("Filtered data:", fetchdata);
//       setFilteredJobs(fetchdata); 
//     } catch (error) {
//       console.error("Error fetching filtered jobs:", error);
//     }
//   };
  

  
//   return (
//   <main>
//     <Navbar/>
//     <Container size="xl">
//        <JobFilter onFilter={handleFilter}/>
//        <JobListing jobs={filteredJobs} />
//     </Container>
//   </main>
//   )
// }

// export default Home


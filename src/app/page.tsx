
"use client";

import React, { useEffect, useState, useCallback } from "react";
import { Container } from "@mantine/core";
import Navbar from "@/Components/Navbar/Navbar";
import JobFilter from "@/app/jobs/JobFilter/JobFilter";
import JobListing from "@/app/jobs/JobListing/JobListing";
import { JobType } from "@/types";
import { fetchJobs, fetchFiltering } from "@/services/apis/apis";

const Home: React.FC = () => {
  const [filteredJobs, setFilteredJobs] = useState<JobType[]>([]);

  // Fetch all jobs on mount
  useEffect(() => {
    const getJobs = async () => {
      try {
        const jobs = await fetchJobs();
        console.log("Jobs fetched:", jobs);
        
        setFilteredJobs(jobs);
      } catch (err) {
        console.error("Error loading jobs:", err);
      }
    };
    getJobs();
  }, []);

  // Filter handler
  const handleFilter = useCallback(async (filters: Record<string, string>) => {
    try {
      const jobs = await fetchFiltering(filters);
      setFilteredJobs(jobs);
    } catch (err) {
      console.error("Error filtering jobs:", err);
    }
  }, []);

  return (
    <main>
      <Navbar />
      <Container size="xl">
        <JobFilter onFilter={handleFilter} />
        <JobListing jobs={filteredJobs} />
      </Container>
    </main>
  );
};

export default Home;



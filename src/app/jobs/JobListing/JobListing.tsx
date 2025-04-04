import JobCard from "@/Components/JobCard/JobCard";
import React from "react";
import { JobType } from "@/types";

interface JobListingProps {
  jobs: JobType[];
}

const JobListing: React.FC<JobListingProps> = ({ jobs }) => {
  return (
    <div className="max-w-[1400px] mx-auto p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {jobs.map((job) => (
          // <JobCard
          //   key={job.id}
          //   image={
          //     typeof job.companyLogo === "string"
          //       ? job.companyLogo || "/default-logo.png"
          //       : job.companyLogo instanceof File
          //       ? URL.createObjectURL(job.companyLogo)
          //       : "/default-logo.png"
          //   }
          //   time={new Date(job.createdAt).toLocaleDateString()}
          //   title={job.jobTitle}
          //   company={job.companyName}
          //   location={job.location}
          //   type={job.jobType}
          //   requirements = {job.requirements}
          //   salary={`$${job.minSalary} - $${job.maxSalary}`}
          // />

          <JobCard
  key={job.id}
  image={
    typeof job.companyLogo === "string"
      ? job.companyLogo || "/default-logo.png"
      : job.companyLogo instanceof File
      ? URL.createObjectURL(job.companyLogo)
      : "/default-logo.png"
  }
  time={new Date(job.createdAt).toLocaleDateString()}
  title={job.jobTitle}
  company={job.companyName}
  location={job.location}
  type={job.jobType}
  salary={`$${job.minSalary} - $${job.maxSalary}`}
  requirements={job.requirements}
  responsibilities={job.responsibilities}
  experience={job.experience}
  applicationDeadline={job.applicationDeadline}
  workLocation={job.workLocation}
  jobDescription={job.jobDescription}
/>

        ))}
      </div>
    </div>
  );
};

export default JobListing;

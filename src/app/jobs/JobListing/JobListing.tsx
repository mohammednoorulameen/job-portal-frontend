


import JobCard from '@/Components/JobCard/JobCard';
import React from 'react'

const JobListing = () => {
    const jobs = [
        {
          image: "/user-avatar1.jpg",
          time: "2 hours ago",
          title: "Frontend Developer",
          company: "Tech Corp",
          location: "New York, USA",
          type: "Full-time",
          salary: "$5,000 / month",
        },
        {
          image: "/user-avatar2.jpg",
          time: "1 day ago",
          title: "Backend Developer",
          company: "InnovateX",
          location: "San Francisco, USA",
          type: "Part-time",
          salary: "$3,500 / month",
        },
        {
            image: "/user-avatar2.jpg",
            time: "1 day ago",
            title: "Backend Developer",
            company: "InnovateX",
            location: "San Francisco, USA",
            type: "Part-time",
            salary: "$3,500 / month",
          },
          {
            image: "/user-avatar2.jpg",
            time: "1 day ago",
            title: "Backend Developer",
            company: "InnovateX",
            location: "San Francisco, USA",
            type: "Part-time",
            salary: "$3,500 / month",
          },
          {
            image: "/user-avatar2.jpg",
            time: "1 day ago",
            title: "Backend Developer",
            company: "InnovateX",
            location: "San Francisco, USA",
            type: "Part-time",
            salary: "$3,500 / month",
          },
          {
            image: "/user-avatar2.jpg",
            time: "1 day ago",
            title: "Backend Developer",
            company: "InnovateX",
            location: "San Francisco, USA",
            type: "Part-time",
            salary: "$3,500 / month",
          },
          {
            image: "/user-avatar2.jpg",
            time: "1 day ago",
            title: "Backend Developer",
            company: "InnovateX",
            location: "San Francisco, USA",
            type: "Part-time",
            salary: "$3,500 / month",
          },
          {
            image: "/user-avatar2.jpg",
            time: "1 day ago",
            title: "Backend Developer",
            company: "InnovateX",
            location: "San Francisco, USA",
            type: "Part-time",
            salary: "$3,500 / month",
          },
           {
          image: "/user-avatar2.jpg",
          time: "1 day ago",
          title: "Backend Developer",
          company: "InnovateX",
          location: "San Francisco, USA",
          type: "Part-time",
          salary: "$3,500 / month",
        }, {
            image: "/user-avatar2.jpg",
            time: "1 day ago",
            title: "Backend Developer",
            company: "InnovateX",
            location: "San Francisco, USA",
            type: "Part-time",
            salary: "$3,500 / month",
          },

        // Add more jobs...
      ];
  return (
//     <div>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 max-w-[1200px] mx-auto">
//   {jobs.map((job, index) => (
//     <JobCard key={index} {...job} />
//   ))}
// </div>

//     </div>

<div className="max-w-[1400px] mx-auto p-4">
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
  {jobs.map((job, index) => (
    <JobCard key={index} {...job} />
    
  ))}
</div>
</div>
  )
}

export default JobListing
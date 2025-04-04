// "use client";

// import React, { useState } from "react";

// interface JobProps {
//   id: string;
//   jobTitle: string;
//   companyName: string;
//   companyLogo: string;
//   createdAt: string;
//   experience: string;
//   workLocation: string;
//   salaryMin: string;
//   responsibilities: string;
//   requirements: string;
//   jobDescription: string;
// }

// const JobCard: React.FC<JobProps> = ({
//   id,
//   jobTitle,
//   companyName,
//   companyLogo,
//   createdAt,
//   experience,
//   workLocation,
//   salaryMin,
//   responsibilities,
//   requirements,
//   jobDescription,
// }) => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <div className="bg-white shadow-lg rounded-lg p-4 border border-gray-200">
//       {/* Top Section: Company Logo + Time */}
//       <div className="flex justify-between items-center">
//         {/* Company Logo (Rounded) */}
//         <img
//           src={companyLogo} // Use companyLogo instead of image
//           alt={companyName}
//           className="w-12 h-12 rounded-full object-cover"
//         />

//         {/* Posted Time */}
//         <span className="text-gray-500 text-sm">{createdAt}</span>
//       </div>

//       {/* Job Details */}
//       <div className="mt-4">
//         {/* Job Title */}
//         <h2 className="text-lg font-semibold">{jobTitle}</h2>

//         {/* Company & Location */}
//         <p className="text-gray-600">
//           {companyName} • {workLocation}
//         </p>

//         {/* Experience & Salary */}
//         <div className="mt-2 flex items-center space-x-4">
//           <span className="text-blue-600 font-medium">{experience} experience</span>
//           <span className="text-green-600 font-medium">${salaryMin} / month</span>
//         </div>

//         {/* Apply Button */}
//         <button
//           onClick={() => setIsOpen(true)}
//           className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
//         >
//           Apply Now
//         </button>
//       </div>
//     </div>
//   );
// };

// export default JobCard;








"use client";

import React, { useState } from 'react';


interface JobProps {
    image: string;
    time: string;
    title: string;
    company: string;
    location: string;
    type: string;
    salary: string;
  }
  

const JobCard: React.FC <JobProps> = ({ image, time, title, company, location, type, salary }) => {
    const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white shadow-lg rounded-lg p-4 border border-gray-200">
      {/* Top Section: User Image + Time */}
      <div className="flex justify-between items-center">
        {/* User Image (Rounded) */}
        <img
          src={image} // Use dynamic image from props
          alt="User"
          className="w-12 h-12 rounded-full object-cover"
        />

        {/* Posted Time */}
        <span className="text-gray-500 text-sm">{time}</span>
      </div>

      {/* Job Details */}
      <div className="mt-4">
        {/* Job Title */}
        <h2 className="text-lg font-semibold">{title}</h2>

        {/* Company & Location */}
        <p className="text-gray-600">{company} • {location}</p>

        {/* Job Type & Salary */}
        <div className="mt-2 flex items-center space-x-4">
          <span className="text-blue-600 font-medium">{type}</span>
          <span className="text-green-600 font-medium">{salary}</span>
        </div>

        {/* Apply Button */}
        <button onClick={() => setIsOpen(true)}
         className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
          Apply Now
        </button>
      </div>


    </div>
  );
};

export default JobCard;




// import React from 'react'

// const JobCard = () => {
//   return (
//     <div>
        
//         <div className="bg-white shadow-lg rounded-lg p-4 w-[22%] mx-auto mt-4 border border-gray-200">
//       {/* Top Section: User Image + Time */}
//       <div className="flex justify-between items-center">
//         {/* User Image (Rounded) */}
//         <img
//           src="/user-avatar.jpg" // Replace with actual image URL
//           alt="User"
//           className="w-12 h-12 rounded-full object-cover"
//         />

//         {/* Posted Time */}
//         <span className="text-gray-500 text-sm">2 hours ago</span>
//       </div>

//       {/* Job Details */}
//       <div className="mt-4">
//         {/* Job Title */}
//         <h2 className="text-lg font-semibold">Frontend Developer</h2>

//         {/* Company & Location */}
//         <p className="text-gray-600">Tech Corp • New York, USA</p>

//         {/* Job Type & Salary */}
//         <div className="mt-2 flex items-center space-x-4">
//           <span className="text-blue-600 font-medium">Full-time</span>
//           <span className="text-green-600 font-medium">$5,000 / month</span>
//         </div>

//         {/* Apply Button */}
//         <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
//           Apply Now
//         </button>
//       </div>
//     </div>

//     </div>
//   )
// }

// export default JobCard
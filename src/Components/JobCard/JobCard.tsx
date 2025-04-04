
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



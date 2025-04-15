"use client";

import React, { useState } from 'react';

interface JobProps {
  image: string | File;
  time: string;
  title: string;
  company: string;
  location: string;
  type: string;
  salary: string;
  requirements: string;
  responsibilities: string;
  experience: string;
  applicationDeadline: string;
  workLocation: string;
  jobDescription: string;
}

const JobCard: React.FC<JobProps> = ({
  image,
  time,
  title,
  company,
  location,
  type,
  salary,
  requirements,
  responsibilities,
  experience,
  applicationDeadline,
  workLocation,
  jobDescription,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white shadow-lg rounded-lg p-4 border border-gray-200">
      {/* Top Section: User Image + Time */}
      <div className="flex justify-between items-center">
        {/* <img
          src={image}
          alt="Company Logo"
          className="w-12 h-12 rounded-full object-cover"
        /> */}
        <img
  src={
    typeof image === "string"
      ? image || "/logo-2.png"
      : image instanceof File
      ? URL.createObjectURL(image)
      : "/logo-2.png"
  }
  onError={(e) => {
    (e.target as HTMLImageElement).src = "/logo-2.png";
  }}
  alt="Company Logo"
  className="w-12 h-12 rounded-full object-cover"
/>
        <span className="text-gray-500 text-sm">{time}</span>
      </div>

      {/* Job Info */}
      <div className="mt-4">
        <h2 className="text-lg font-semibold">{title}</h2>
        <p className="text-gray-600">{company} • {location}</p>
        <div className="mt-2 flex items-center space-x-4">
          <span className="text-blue-600 font-medium">{type}</span>
          {/* <span className="text-green-600 font-medium">{salary}</span> */}
          <span className="text-green-600 font-medium">{salary}</span>
        </div>

      

<button
  onClick={() => setIsOpen(!isOpen)}
  className="mt-4 w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
>
  {isOpen ? "Hide Details" : "View Details"}
</button>


        {/* Extra Details */}
        {isOpen && (
          <div className="mt-4 text-sm text-gray-700 space-y-2">
            <p><strong>Requirements:</strong> {requirements}</p>
            <p><strong>Responsibilities:</strong> {responsibilities}</p>
            <p><strong>Experience:</strong> {experience}</p>
            <p><strong>Deadline:</strong> {applicationDeadline}</p>
            <p><strong>Work Location:</strong> {workLocation}</p>
            <p><strong>Description:</strong> {jobDescription}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default JobCard;


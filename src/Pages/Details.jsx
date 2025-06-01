import React from "react";
import {
  FaMapMarkerAlt,
  FaBriefcase,
  FaEnvelope,
  FaUser,
  FaMoneyBillWave,
} from "react-icons/fa";
import { useLoaderData, useNavigate } from "react-router";

const Details = () => {
  const job = useLoaderData();

  const navigate = useNavigate();
  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-xl shadow-md space-y-4 my-[50px]">
      <div className="flex items-center space-x-4">
        <img
          src={job.company_logo}
          alt={job.company}
          className="w-16 h-16 rounded"
        />
        <div>
          <h2 className="text-2xl font-bold">{job.title}</h2>
          <p className="text-gray-600">{job.company}</p>
        </div>
      </div>

      <div className="space-y-2">
        <p className="flex items-center text-gray-700">
          <FaMapMarkerAlt className="mr-2" /> {job.location}
        </p>
        <p className="flex items-center text-gray-700">
          <FaBriefcase className="mr-2" /> {job.jobType}
        </p>
        <p className="flex items-center text-gray-700">
          <FaMoneyBillWave className="mr-2" /> {job.salaryRange.min} -{" "}
          {job.salaryRange.max} {job.salaryRange.currency.toUpperCase()}
        </p>
        <p className="flex items-center text-gray-700">
          <FaEnvelope className="mr-2" /> {job.hr_email}
        </p>
        <p className="flex items-center text-gray-700">
          <FaUser className="mr-2" /> {job.hr_name}
        </p>
      </div>

      <div>
        <h3 className="text-xl font-semibold mb-2">Description</h3>
        <p className="text-gray-700">{job.description}</p>
      </div>

      <div>
        <h3 className="text-xl font-semibold mb-2">Requirements</h3>
        <ul className="list-disc list-inside space-y-1">
          {job.requirements.map((req, index) => (
            <li key={index}>{req}</li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className="text-xl font-semibold mb-2">Responsibilities</h3>
        <ul className="list-disc list-inside space-y-1">
          {job.responsibilities.map((res, index) => (
            <li key={index}>{res}</li>
          ))}
        </ul>
      </div>

      <div className="mt-4 flex justify-end">
        <button
          onClick={() => navigate(`/jobApply/${job._id}`)}
          className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 cursor-pointer">
          Apply
        </button>
      </div>
    </div>
  );
};

export default Details;

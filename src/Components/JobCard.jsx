import React from "react";
import { Link } from "react-router";

const JobCard = ({ job }) => {
  return (
    <div className="">
      <div className=" p-6 bg-white rounded-lg shadow-md w-full">
        {/* Company Logo/Image Placeholder */}
        <div className="flex items-center mb-4">
          <div className="w-12 h-12 bg-gray-200 rounded-lg mr-4 flex items-center justify-center text-gray-400">
            <img src={job.company_logo} alt="" />
          </div>
          <div className="w-full">
            <div className="flex items-center">
              <h2 className="text-xl font-bold text-gray-800">{job.title}</h2>
              <div className="badge badge-soft badge-success ml-auto">
                {job.jobType}
              </div>
            </div>
            <p className="text-gray-600">{job.company}</p>
          </div>
        </div>

        <div className="mb-4">
          <div className="flex items-center">
            <p className="text-gray-700">{job.location}</p>
            <span className=" ml-auto">2 days ago</span>
          </div>
          <p className="text-gray-700">
            {job.salaryRange.min} - {job.salaryRange.max}{" "}
            {job.salaryRange.currency}
          </p>
        </div>

        <div className="mb-6">
          <p className="text-gray-800 mb-3 whitespace-nowrap overflow-hidden text-ellipsis">
            {job.description}
          </p>

          <div className="flex flex-wrap gap-2 mb-4">
            {job.requirements.map((item, indx) => (
              <span
                key={indx}
                className="px-3 py-1  text-sm badge badge-outline badge-accent">
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="flex justify-between items-center gap-2">
          <Link
            to={`/job/${job._id}`}
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition flex-1 text-center">
            Apply Now
          </Link>
          <button className="text-gray-600 btn btn-outline hover:text-gray-800 flex-1">
            Save Job
          </button>
        </div>

        <div className="mt-4 pt-4 border-t border-gray-200 flex justify-between text-sm text-gray-500"></div>
      </div>
    </div>
  );
};

export default JobCard;

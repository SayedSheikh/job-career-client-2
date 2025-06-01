import React, { use } from "react";
import { Link } from "react-router";

const PostedJobsTable = ({ submittedJobs }) => {
  const data = use(submittedJobs);

  return (
    <div>
      <div className="overflow-x-auto rounded-box max-w-[70%] border border-base-300 mx-auto  bg-base-100 rounded-2xl">
        <table className="table ">
          {/* head */}
          <thead className="bg-base-200">
            <tr>
              <th>#</th>
              <th>Company</th>
              <th>Job type</th>
              <th className="w-[70px]">Applications</th>
              <th className="text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}

            {data.data.map((job, index) => (
              <tr key={index}>
                <th>{index + 1}</th>
                <td>{job.company}</td>
                <td>{job.jobType}</td>
                <td className="text-center">{job.totalApplication}</td>
                <td className="hover:underline text-primary text-center">
                  <Link to={`/myJobPost/applications/${job._id}`}>
                    Applications
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PostedJobsTable;

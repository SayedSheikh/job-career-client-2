import React, { use } from "react";

const AppliedJobsTable = ({ appliedJobs }) => {
  const { data } = use(appliedJobs);
  console.log(data);

  const jobStatus = (status) => {
    if (!status || status === "pending") {
      return <div className="badge badge-soft badge-warning">Pending</div>;
    } else if (status === "Hired") {
      return <div className="badge badge-soft badge-success">Hired</div>;
    } else {
      return <div className="badge badge-soft badge-error">Rejected</div>;
    }
  };

  return (
    <div>
      <div className="overflow-x-auto rounded-box max-w-[70%] border border-base-300 mx-auto  bg-base-100 rounded-2xl">
        <table className="table ">
          {/* head */}
          <thead className="bg-base-200">
            <tr>
              <th>#</th>
              <th>Company</th>
              <th>Job Title</th>
              <th>Category</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}

            {data.map((job, index) => (
              <tr key={index}>
                <th>{index + 1}</th>
                <td>{job.company}</td>
                <td>{job.title}</td>
                <td>{job.category}</td>
                <td>{jobStatus(job.status)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AppliedJobsTable;

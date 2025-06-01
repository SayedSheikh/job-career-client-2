import axios from "axios";

import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Swal from "sweetalert2";
import Loding from "../Components/Loding";
import useAuth from "../Hooks/useAuth";

const JobApplication = () => {
  const { user } = useAuth();
  const { id } = useParams();
  // const data = useLoaderData();

  const [data, setData] = useState(null);

  useEffect(() => {
    if (!user) {
      return;
    }
    fetch(`http://localhost:3000/myJobPost/applications/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      })
      .catch((err) => console.log(err));
  }, [id, user]);

  const handleChange = (value, id) => {
    axios
      .patch(`http://localhost:3000/applicationUpdate/${id}`, { status: value })
      .then((res) => {
        if (res.data.modifiedCount || res.data.upsertedCount) {
          Swal.fire({
            icon: "success",
            title: "Status Updated",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      })
      .catch((err) => console.log(err));
  };

  if (!data) {
    return (
      <div className="mt-[50px] flex items-center justify-center">
        <span className="loading loading-bars loading-xl"></span>
      </div>
    );
  }

  return (
    <div className="my-[50px]">
      <h1 className="text-4xl text-center mb-[30px]">
        Applications in that job
      </h1>
      {data?.length === 0 ? (
        <div className="p-5 bg-base-300 border border-gray-400 rounded-2xl">
          <h1 className="text-3xl font-semibold text-center">
            No one <br /> submitted Application for thos job
          </h1>
        </div>
      ) : (
        <div className="overflow-x-auto rounded-box max-w-[70%] border border-base-300 mx-auto  bg-base-100 rounded-2xl">
          <table className="table ">
            {/* head */}
            <thead className="bg-base-200">
              <tr>
                <th>#</th>
                <th>Email</th>
                <th>Company</th>
                <th>Job Title</th>

                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}

              {data.map((job, index) => (
                <tr key={index}>
                  <th>{index + 1}</th>
                  <td>{job?.email}</td>
                  <td>{job?.company}</td>
                  <td>{job?.title}</td>

                  <td>
                    <select
                      onChange={(e) => handleChange(e.target.value, job._id)}
                      defaultValue={job.status || "pending"}
                      className="select select-primary">
                      <option>Rejected</option>
                      <option>pending</option>
                      <option>Hired</option>
                    </select>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default JobApplication;

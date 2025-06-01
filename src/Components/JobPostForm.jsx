import React from "react";
import useAuth from "../Hooks/useAuth";
import axios from "axios";
import Swal from "sweetalert2";

const JobPostForm = () => {
  const { user } = useAuth();

  const handleForm = (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    const {
      min,
      max,
      currency,
      responsibilities,
      requirements,
      ...newJobData
    } = data;

    const salaryRange = { min, max, currency };

    newJobData.salaryRange = { ...salaryRange };

    const UpdatedResponsibilities = responsibilities
      .split(",")
      .map((word) => word.trim());

    const UpdatedRequirments = requirements
      .split(",")
      .map((word) => word.trim());

    newJobData.requirements = [...UpdatedRequirments];
    newJobData.responsibilities = [...UpdatedResponsibilities];

    axios
      .post("http://localhost:3000/postJob", newJobData)
      .then((res) => {
        if (res.data.insertedId) {
          form.reset();
          Swal.fire({
            icon: "success",
            title: "Your Job has been saved successfully",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="">
      <form onSubmit={handleForm}>
        <fieldset className="fieldset bg-base-200 border-gray-400 rounded-box border p-4 mx-auto max-w-[800px] ">
          <legend className="fieldset-legend">Job Basic Info</legend>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[20px]">
            <div className="flex flex-col">
              <label className="label">Title</label>
              <input
                type="text"
                className="input w-full"
                placeholder="Job title"
                name="title"
              />
            </div>
            <div className="flex flex-col">
              <label className="label">Company</label>
              <input
                type="text"
                className="input w-full"
                placeholder="Job Location"
                name="company"
              />
            </div>
            <div className="">
              <label className="label">Job Type</label>
              <div className="flex gap-[10px] ">
                <input
                  className="btn btn-square flex-1"
                  type="reset"
                  value="×"
                />
                <input
                  className="btn flex-1"
                  type="radio"
                  name="jobType"
                  aria-label="Hybrid"
                  value="Hybrid"
                />
                <input
                  className="btn flex-1"
                  type="radio"
                  name="jobType"
                  aria-label="Remote"
                  value="Remote"
                />
                <input
                  className="btn flex-1"
                  type="radio"
                  name="jobType"
                  aria-label="Full-time"
                  value="Full-time"
                />
              </div>
            </div>
            <div className="flex flex-col">
              <label className="label">Category</label>
              <input
                type="text"
                className="input w-full"
                placeholder="Job Category"
                name="category"
              />
            </div>

            <div className="flex flex-col lg:col-span-2 gap-2">
              <label className="label">Description</label>
              <textarea
                className="w-full textarea text-md"
                placeholder="Job Category"
                rows={3}
                name="description"
              />
            </div>
          </div>
        </fieldset>

        <fieldset className="fieldset bg-base-200 border-gray-400 rounded-box border p-4 mx-auto max-w-[800px] ">
          <legend className="fieldset-legend">Job-info</legend>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[20px]">
            <div className="flex flex-col">
              <label className="label">Location</label>
              <input
                type="text"
                className="input w-full"
                placeholder="Job Location"
                name="location"
              />
            </div>
            <div className="flex flex-col">
              <label className="label">DeadLine</label>
              <input
                type="date"
                className="input w-full"
                name="applicationDeadline"
              />
            </div>
            <div className="flex flex-col">
              <label className="label">Salary</label>
              <div className="grid grid-cols-3 gap-2">
                <input
                  type="number"
                  placeholder="Minimum"
                  className="input"
                  name="min"
                />
                <input
                  type="number"
                  placeholder="Maximum"
                  className="input"
                  name="max"
                />
                <select
                  defaultValue="Pick a browser"
                  className="select"
                  name="currency">
                  <option disabled={true}>Currency</option>
                  <option>BDT</option>
                  <option>USD</option>
                  <option>EURO</option>
                </select>
              </div>
            </div>
            <div className="flex flex-col">
              <label className="label">Job Status</label>
              <select
                defaultValue="Pick a browser"
                className="select w-full"
                name="status">
                <option disabled={true}>Currency</option>
                <option>active</option>
                <option>closed</option>
              </select>
            </div>
            <div className="flex flex-col lg:col-span-2 gap-2">
              <label className="label">Requirements</label>
              <textarea
                className="w-full textarea text-md min-h-[20px]"
                placeholder="Requirements (seperate by comma)"
                name="requirements"
              />
            </div>
            <div className="flex flex-col lg:col-span-2 gap-2">
              <label className="label">Responsibilities</label>
              <textarea
                className="w-full textarea text-md min-h-[20px]"
                placeholder="Responsibilities (seperate by comma)"
                name="responsibilities"
              />
            </div>
          </div>
        </fieldset>
        <fieldset className="fieldset bg-base-200 border-gray-400 rounded-box border p-4 mx-auto max-w-[800px] ">
          <legend className="fieldset-legend">HR-info</legend>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[20px]">
            <div className="flex flex-col">
              <label className="label">HR-email</label>
              <input
                type="text"
                className="input w-full"
                placeholder="HR email"
                name="hr_email"
                value={user?.email}
                readOnly
              />
            </div>
            <div className="flex flex-col">
              <label className="label">HR-name</label>
              <input
                type="text"
                className="input w-full"
                placeholder="HR name"
                name="hr_name"
                value={user?.displayName}
                readOnly
              />
            </div>
            <div className="flex flex-col lg:col-span-2">
              <label className="label">Company logo</label>
              <input
                type="url"
                className="input w-full"
                placeholder="logo url"
                name="company_logo"
              />
            </div>
          </div>
          <input
            type="submit"
            value="submit"
            className="btn btn-accent text-white"
          />
        </fieldset>
        {/* <fieldset className="fieldset bg-base-200 border-gray-400 rounded-box border p-4 mx-auto max-w-[800px] ">
          <legend className="fieldset-legend">Job-info</legend>
        </fieldset> */}
      </form>
    </div>
  );
};

export default JobPostForm;

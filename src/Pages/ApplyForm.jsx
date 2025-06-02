import React from "react";
import { useParams } from "react-router";
import useAuth from "../Hooks/useAuth";
import axios from "axios";
import Swal from "sweetalert2";

const ApplyForm = () => {
  const { user } = useAuth();
  const { id: jobId } = useParams();
  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);
    const values = Object.fromEntries(formData.entries());
    values.jobId = jobId;
    values.email = user.email;

    axios
      .post("http://localhost:3000/apply", values)
      .then((res) => {
        if (res.data.insertedId) {
          Swal.fire({
            icon: "success",
            title: "Job Applied successfully",
            showConfirmButton: false,
            timer: 1500,
          });

          form.reset();
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="min-h-[calc(100vh-65px)] flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
        <legend className="fieldset-legend">Apply for the job</legend>

        <label className="label">Github</label>
        <input
          type="url"
          className="input"
          placeholder="Github link"
          name="github"
          required
        />

        <label className="label">LinkedInd</label>
        <input
          type="url"
          className="input"
          placeholder="LinkedInd link"
          name="linkedIn"
          required
        />

        <label className="label">Portfolio</label>
        <input
          type="url"
          className="input"
          placeholder="Portfolio lnik"
          name="portfolio"
          required
        />
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ApplyForm;

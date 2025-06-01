import React from "react";
import JobPostForm from "../Components/JobPostForm";

const SubmitJob = () => {
  return (
    <div className="my-[40px]">
      <h1 className="text-4xl font-semibold text-center">Post a Job</h1>

      <JobPostForm></JobPostForm>
    </div>
  );
};

export default SubmitJob;

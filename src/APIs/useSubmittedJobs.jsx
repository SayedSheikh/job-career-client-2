import React from "react";
import useSecureAxios from "../Hooks/useSecureAxios";

const useSubmittedJobs = () => {
  const secureAxios = useSecureAxios();

  const submittedJobs = (email) => {
    return secureAxios.get(
      `http://localhost:3000/submittedJobs?email=${email}`
    );
  };
  return {
    submittedJobs,
  };
};

export default useSubmittedJobs;

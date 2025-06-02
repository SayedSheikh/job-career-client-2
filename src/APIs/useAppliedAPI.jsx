import React from "react";
import useSecureAxios from "../Hooks/useSecureAxios";

const useAppliedAPI = () => {
  const secureAxios = useSecureAxios();

  const appliedJobs = (email) => {
    return secureAxios.get(`/appliedJobs?email=${email}`);
  };
  return {
    appliedJobs,
  };
};

export default useAppliedAPI;

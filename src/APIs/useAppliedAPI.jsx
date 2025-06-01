import React from "react";
import useSecureAxios from "../Hooks/useSecureAxios";

const useAppliedAPI = () => {
  const secureAxios = useSecureAxios();

  const appliedPromise = (email) => {
    return secureAxios.get(`/appliedJobs?email=${email}`);
  };
  return {
    appliedPromise,
  };
};

export default useAppliedAPI;

import axios from "axios";

export const appliedJobs = (email) => {
  return axios(`http://localhost:3000/appliedJobs?email=${email}`);
};

import axios from "axios";

export const submittedJobs = (email) => {
  return axios.get(`http://localhost:3000/submittedJobs?email=${email}`);
};

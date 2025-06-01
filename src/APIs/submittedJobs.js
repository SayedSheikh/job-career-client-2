import axios from "axios";

export const submittedJobs = (email) => {
  return axios.get(`http://localhost:3000/allJobs?email=${email}`, {
    withCredentials: true,
  });
};

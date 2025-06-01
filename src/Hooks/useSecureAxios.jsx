import axios from "axios";
import React from "react";
import useAuth from "./useAuth";

const axiosInstance = axios.create({
  baseURL: "http://localhost:3000",
});

const useSecureAxios = () => {
  const { user } = useAuth();

  console.log(user.accessToken);

  axiosInstance.interceptors.request.use((config) => {
    config.headers.authorization = `Bearer ${user?.accessToken}`;

    return config;
  });
  return axiosInstance;
};

export default useSecureAxios;

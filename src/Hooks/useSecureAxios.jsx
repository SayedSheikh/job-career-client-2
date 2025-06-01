import axios from "axios";
import React from "react";
import useAuth from "./useAuth";

const secureAxios = axios.create({
  baseURL: "http://localhost:3000",
});

const useSecureAxios = () => {
  const { user } = useAuth();

  secureAxios.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${user.accessToken}`;

    return config;
  });
  return secureAxios;
};

export default useSecureAxios;

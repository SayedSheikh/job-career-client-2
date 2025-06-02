import axios from "axios";
import React from "react";
import useAuth from "./useAuth";

const secureAxios = axios.create({
  baseURL: "http://localhost:3000",
});

const useSecureAxios = () => {
  const { user, logOut } = useAuth();

  secureAxios.interceptors.request.use((config) => {
    config.headers.authorization = `Bearer ${user.accessToken}`;

    return config;
  });

  secureAxios.interceptors.response.use(
    (res) => {
      return res;
    },
    (error) => {
      if (error.status === 401 || error.status === 403) {
        logOut()
          .then(() => {
            window.location.href = "/login";
          })
          .catch((err) => {
            console.log(err);
          });
      }

      console.log(error);
      return Promise.reject(error);
    }
  );
  return secureAxios;
};

export default useSecureAxios;

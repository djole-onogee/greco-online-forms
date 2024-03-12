import axios from "axios";

export const errorHandler = async (error: any) => {
  try {
    const status = error.response?.status;
    const message = error.response?.data?.error;
    if (axios.isCancel(error)) {
      return Promise.reject();
    }

    if (status === 401) {
      return Promise.reject({
        status: 401,
        message: message || "Not Authorised",
      });
    }

    if (status === 441) {
      if (typeof window !== "undefined") {
        localStorage.removeItem("accessToken");
      }
      return Promise.reject({
        status: 401,
        message: message || "User Logged in somewhere else",
      });
    }

    if (status === 404) {
      return Promise.reject({
        status: 404,
        message: message || "Not found",
      });
    }

    if (status === 500) {
      return Promise.reject({
        status: 500,
        message: message || "Unable to complete request",
      });
    }

    return Promise.reject(error.response);
  } catch {
    return Promise.reject("Unable to complete request");
  }
};

import axios, { AxiosResponse } from "axios";
import { errorHandler } from "./errorHandler";

export const getBaseURL = () => {
  if (typeof window !== "undefined") {
    const domain = window.location.origin;

    if (domain.includes("localhost")) {
      return "https://client-forms-demo.azurewebsites.net/";
    }

    if (domain.includes("greco-online-forms")) {
      return "https://client-forms-demo.azurewebsites.net/";
    }

    if (domain.includes("azurewebsites.net")) {
      return "https://client-forms-demo.azurewebsites.net/";
    }
  }

  return "";
};

const http = axios.create({
  baseURL: getBaseURL(),
});

class ApiService {
  httpService = axios;

  async get(path: string, config?: any): Promise<any> {
    const options = {
      ...config,
    };

    return http
      .get(path, options)
      .then((response: AxiosResponse) => response.data)
      .catch(errorHandler);
  }

  async getFull(path: string, config?: any): Promise<any> {
    const options = {
      ...config,
    };

    return http.get(path, options).catch(errorHandler);
  }

  async post(path: string, payload?: any, config?: any): Promise<any> {
    const options = {
      ...config,
    };
    return http.post(path, payload, options).catch(errorHandler);
  }

  async postJson(path: string, payload: string, config = {}) {
    const headers = {
      "Content-Type": "application/json",
      ...config,
    };

    const options = {
      headers,
      ...config,
    };

    const body = JSON.stringify(payload);

    return http.post(path, payload, options).catch(errorHandler);
  }

  async put(path: string, payload: any, config?: any): Promise<any> {
    const options = {
      ...config,
    };

    return http.put(path, payload, options).catch(errorHandler);
  }

  async delete(path: string, config?: any): Promise<any> {
    const options = {
      ...config,
    };

    return http.delete(path, options).catch(errorHandler);
  }

  async patch(path: string, payload: any, config?: any): Promise<any> {
    const options = {
      ...config,
    };

    return http.patch(path, payload, options).catch(errorHandler);
  }

  async postFile(path: string, file?: any, config?: any): Promise<any> {
    const options = {
      headers: { "Content-Type": "multipart/form-data" },
      ...config,
    };
    return http.post(path, file, options).catch(errorHandler);
  }

  async postImageFile(path: string, file: any, config?: any): Promise<any> {
    const requestOptions = {
      method: "PUT",
      headers: {
        "Content-Type": "multipart/form-data",
      },
      body: file,
    };
    await fetch(path, requestOptions);
  }
}

const API_SERVICE = new ApiService();
export default API_SERVICE;

import axios, { AxiosRequestConfig } from "axios";

const axiosInstance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  responseType: 'json',
});

export const apiRequest = (
  method: AxiosRequestConfig['method'],
  url: AxiosRequestConfig['url'],
  data: AxiosRequestConfig['data'],
  params?: AxiosRequestConfig['params']
) => {

  return axiosInstance({
    method,
    url,
    data,
    params,
  });
};



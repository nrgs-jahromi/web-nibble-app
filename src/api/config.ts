import axios, { AxiosError } from "axios";

export const API_BASE_URL = "http://127.0.0.1:8000";

const accessToken = localStorage.getItem("accessToken");
export const fetcher = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
    Authorization: `api_key ${accessToken}`,
  },
});

// setInterceptors();

export type ApiErrorData = {
  detail: {
    non_field_error: string[];
    [key: string]: string[];
  };
};

export type ApiError = AxiosError<ApiErrorData>;

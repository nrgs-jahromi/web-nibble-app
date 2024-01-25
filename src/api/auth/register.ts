import { MutationFunction, useMutation } from "@tanstack/react-query";
import { ApiError, fetcher } from "../config";

type DataT = {
  body: {
    email: string;
    full_name: string;
    password: string;
  };
};

type ResT = null;

const registerUser: MutationFunction<ResT, DataT> = async (data) => {
  const { data: dataRes } = await fetcher.post<ResT>("/register/", data.body);
  return dataRes;
};

export const useUserRegistration = () => {
  return useMutation<ResT, ApiError, DataT>(["registerUser"], registerUser);
};

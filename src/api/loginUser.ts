import { MutationFunction, useMutation } from "@tanstack/react-query";
import { ApiError, fetcher } from "./config";

type DataT = {
  body: {
    email: string;
    password: string;
  };
};

type ResT = {
  username: string;
  password: string;
  token: string;
};

const loginUser: MutationFunction<ResT, DataT> = async (data) => {
  const formData = new FormData();
  formData.append("email", data.body.email);
  formData.append("password", data.body.password);

  const { data: dataRes } = await fetcher.post<ResT>("/login/", formData);
  return dataRes;
};

export const useUserLogin = () => {
  return useMutation<ResT, ApiError, DataT>(["loginUser"], loginUser);
};

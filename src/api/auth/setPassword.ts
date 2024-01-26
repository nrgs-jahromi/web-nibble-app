import { MutationFunction, useMutation } from "@tanstack/react-query";

import { fetcher, ApiError } from "../config";

type DataT = {
  params: { token: string };
  body: { password: string };
};

type ResT = null;

const changePassword: MutationFunction<ResT, DataT> = async (data) => {
  const { data: dataRes } = await fetcher.post<ResT>(
    `/set-password/${data.params.token}/`,
    data.body
  );
  return dataRes;
};

export const usePasswordChanging = () => {
  return useMutation<ResT, ApiError, DataT>(["changePassword"], changePassword);
};

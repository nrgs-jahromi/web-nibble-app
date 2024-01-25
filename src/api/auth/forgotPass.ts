import { MutationFunction, useMutation } from "@tanstack/react-query";
import { ApiError, fetcher } from "../config";

type DataT = {
  body: {
    email: string;
  };
};

type ResT = null;

const forgotPass: MutationFunction<ResT, DataT> = async (data) => {
  const formData = new FormData();
  formData.append("email", data.body.email);

  const { data: dataRes } = await fetcher.post<ResT>(
    "/forgot-pass-request/",
    formData
  );
  return dataRes;
};

export const useForgotPass = () => {
  return useMutation<ResT, ApiError, DataT>(["forgotPass"], forgotPass);
};

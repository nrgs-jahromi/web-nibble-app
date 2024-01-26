import { MutationFunction, useMutation } from "@tanstack/react-query";
import { ApiError, fetcher } from "../config";

type DataT = {
  body: {
    email: string;
  };
};

type ResT = null;

const verifyRequest: MutationFunction<ResT, DataT> = async (data) => {
  const formData = new FormData();
  formData.append("email", data.body.email);

  const { data: dataRes } = await fetcher.post<ResT>(
    "/email-verify-req/",
    formData
  );
  return dataRes;
};

export const useVerifyRequest = () => {
  return useMutation<ResT, ApiError, DataT>(["verifyRequest"], verifyRequest);
};

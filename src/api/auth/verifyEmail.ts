import { ApiError, fetcher } from "../config";
import {
  QueryFunction,
  UseQueryOptions,
  useQuery,
} from "@tanstack/react-query";

type DataT = {
  params: {
    token: string;
  };
};

type ResT = null;

type QueryKey = ["verifyEmail", DataT];

const verifyEmail: QueryFunction<ResT, QueryKey> = async ({ queryKey }) => {
  const { data: dataRes } = await fetcher.get<ResT>(
    `/email-verify/${queryKey[1].params.token}/`
  );
  return dataRes;
};

export const useEmailVerification = (
  data: DataT,
  options:
    | UseQueryOptions<ResT, ApiError, ResT, QueryKey>
    | undefined = undefined
) => {
  return useQuery<ResT, ApiError, ResT, QueryKey>(
    ["verifyEmail", data],
    verifyEmail,
    options
  );
};

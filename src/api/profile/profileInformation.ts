import { ApiError, fetcher } from "../config";
import {
  QueryFunction,
  UseQueryOptions,
  useQuery,
} from "@tanstack/react-query";

type DataT = {
  body: {
    id: number;
  };
};

type ResT = UserItem;

type QueryKey = ["userInfo", DataT];

const userInfo: QueryFunction<ResT, QueryKey> = async ({ queryKey }) => {
  const { data: dataRes } = await fetcher.get<ResT>(
    `/get-user/${queryKey[1].body.id}/`
  );
  return dataRes;
};

export const useUserInfo = (
  data: DataT,
  options:
    | UseQueryOptions<ResT, ApiError, ResT, QueryKey>
    | undefined = undefined
) => {
  return useQuery<ResT, ApiError, ResT, QueryKey>(
    ["userInfo", data],
    userInfo,
    options
  );
};

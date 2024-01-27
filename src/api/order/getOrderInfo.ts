import { ApiError, fetcher } from "../config";
import {
  QueryFunction,
  UseQueryOptions,
  useQuery,
} from "@tanstack/react-query";

type DataT = {
  params: {
    id: number;
  };
};

type ResT = OrderT;

type QueryKey = ["getOrderInfo", DataT];

const getOrderInfo: QueryFunction<ResT, QueryKey> = async ({ queryKey }) => {
  const { data: dataRes } = await fetcher.get<ResT>(
    `/get-order/${queryKey[1].params.id}/`
  );
  return dataRes;
};

export const useOrderInformation = (
  data: DataT,
  options:
    | UseQueryOptions<ResT, ApiError, ResT, QueryKey>
    | undefined = undefined
) => {
  return useQuery<ResT, ApiError, ResT, QueryKey>(
    ["getOrderInfo", data],
    getOrderInfo,
    options
  );
};

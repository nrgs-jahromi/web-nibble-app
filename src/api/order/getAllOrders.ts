import { ApiError, fetcher } from "../config";
import {
  QueryFunction,
  UseQueryOptions,
  useQuery,
} from "@tanstack/react-query";

type ResT = OrderT[];
type QueryKey = ["orderList"];

const listOrder: QueryFunction<ResT, QueryKey> = async (key) => {
  const { data: dataRes } = await fetcher.get<ResT>("/get-orders/");
  return dataRes;
};

export const useOrderList = (
  options?: UseQueryOptions<ResT, ApiError, ResT, QueryKey>
) => {
  return useQuery(["orderList"], listOrder, options);
};

import { ApiError, fetcher } from "../config";
import {
  QueryFunction,
  UseQueryOptions,
  useQuery,
} from "@tanstack/react-query";

type ResT = RestaurantT[];
type QueryKey = ["highClassResList"];

const listHighClassRes: QueryFunction<ResT, QueryKey> = async (key) => {
  const { data: dataRes } = await fetcher.get<ResT>("/restaurants/highclass/");
  return dataRes;
};

export const useHighClassResList = (
  options?: UseQueryOptions<ResT, ApiError, ResT, QueryKey>
) => {
  return useQuery(["highClassResList"], listHighClassRes, options);
};

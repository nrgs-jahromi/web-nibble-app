import { ApiError, fetcher } from "../config";
import {
  QueryFunction,
  UseQueryOptions,
  useQuery,
} from "@tanstack/react-query";

type ResT = RestaurantT[];
type QueryKey = ["freeDelResList"];

const listFreeDelRes: QueryFunction<ResT, QueryKey> = async (key) => {
  const { data: dataRes } = await fetcher.get<ResT>(
    "/restaurants/free-delivery/"
  );
  return dataRes;
};

export const usefreeDelResList = (
  options?: UseQueryOptions<ResT, ApiError, ResT, QueryKey>
) => {
  return useQuery(["freeDelResList"], listFreeDelRes, options);
};

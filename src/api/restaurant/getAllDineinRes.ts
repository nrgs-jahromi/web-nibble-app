import { ApiError, fetcher } from "../config";
import {
  QueryFunction,
  UseQueryOptions,
  useQuery,
} from "@tanstack/react-query";

type ResT = RestaurantT[];
type QueryKey = ["dineinResList"];

const listdineinRes: QueryFunction<ResT, QueryKey> = async (key) => {
  const { data: dataRes } = await fetcher.get<ResT>("/restaurants/dine-in/");
  return dataRes;
};

export const useDineinResList = (
  options?: UseQueryOptions<ResT, ApiError, ResT, QueryKey>
) => {
  return useQuery(["dineinResList"], listdineinRes, options);
};

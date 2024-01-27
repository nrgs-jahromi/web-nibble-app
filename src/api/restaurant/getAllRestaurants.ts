import { ApiError, fetcher } from "../config";
import {
  QueryFunction,
  UseQueryOptions,
  useQuery,
} from "@tanstack/react-query";

type ResT = RestaurantT[];
type QueryKey = ["restaurantsList"];

const listRestaurants: QueryFunction<ResT, QueryKey> = async (key) => {
  const { data: dataRes } = await fetcher.get<ResT>("/get-restaurants/");
  return dataRes;
};

export const useRestaurantsList = (
  options?: UseQueryOptions<ResT, ApiError, ResT, QueryKey>
) => {
  return useQuery(["restaurantsList"], listRestaurants, options);
};

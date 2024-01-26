import { ApiError, fetcher } from "../config";
import {
  QueryFunction,
  UseQueryOptions,
  useQuery,
} from "@tanstack/react-query";

type ResT = RestaurantT[];
type QueryKey = ["favRestaurantList"];

const listFavRestaurant: QueryFunction<ResT, QueryKey> = async (key) => {
  const { data: dataRes } = await fetcher.get<ResT>("/get-fav-restaurants/");
  return dataRes;
};

export const useFavRestaurantList = (
  options?: UseQueryOptions<ResT, ApiError, ResT, QueryKey>
) => {
  return useQuery(["favRestaurantList"], listFavRestaurant, options);
};

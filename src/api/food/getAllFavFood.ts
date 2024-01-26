import { ApiError, fetcher } from "../config";
import {
  QueryFunction,
  UseQueryOptions,
  useQuery,
} from "@tanstack/react-query";

type ResT = FoodT[];
type QueryKey = ["favFoodList"];

const listFavFood: QueryFunction<ResT, QueryKey> = async (key) => {
  const { data: dataRes } = await fetcher.get<ResT>("/get-fav-foods/");
  return dataRes;
};

export const useFavFoodList = (
  options?: UseQueryOptions<ResT, ApiError, ResT, QueryKey>
) => {
  return useQuery(["favFoodList"], listFavFood, options);
};

import { ApiError, fetcher } from "../config";
import {
  QueryFunction,
  UseQueryOptions,
  useQuery,
} from "@tanstack/react-query";

type ResT = {
  id: number;
};
type QueryKey = ["getCartRestauranr"];

const getCartRestauranr: QueryFunction<ResT, QueryKey> = async (key) => {
  const { data: dataRes } = await fetcher.get<ResT>("/cart/get-restaurant/");
  return dataRes;
};

export const usegetCartRestauranr = (
  options?: UseQueryOptions<ResT, ApiError, ResT, QueryKey>
) => {
  return useQuery(["getCartRestauranr"], getCartRestauranr, options);
};

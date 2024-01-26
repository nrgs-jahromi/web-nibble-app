import { ApiError, fetcher } from "../../config";
import { QueryFunction, UseQueryOptions, useQuery } from "@tanstack/react-query";

type DataT = {
  params: {
    id: string;
  };
};

type ResT = RestaurantT;

type QueryKey = ["getRestaurantInfo", DataT];

const getRestaurantInfo: QueryFunction<ResT, QueryKey> = async ({ queryKey }) => {
  const { data: dataRes } = await fetcher.get<ResT>(
    `/get-restaurant/${queryKey[1].params.id}/`,
  );
  return dataRes;
};

export const useRestaurantInformation = (
  data: DataT,
  options: UseQueryOptions<ResT, ApiError, ResT, QueryKey> | undefined = undefined,
) => {
  return useQuery<ResT, ApiError, ResT, QueryKey>(["getRestaurantInfo", data], getRestaurantInfo, options);
};

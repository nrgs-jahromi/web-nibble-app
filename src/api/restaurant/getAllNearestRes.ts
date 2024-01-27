import { ApiError, fetcher } from "../config";
import {
  QueryFunction,
  UseQueryOptions,
  useQuery,
} from "@tanstack/react-query";

type DataT = {
  params: {
    city: string;
  };
};

type ResT = RestaurantT[];

type QueryKey = ["nearestResList", DataT];

const listNearestRes: QueryFunction<ResT, QueryKey> = async ({ queryKey }) => {
  const { data: dataRes } = await fetcher.get<ResT>(
    `/restaurants/nearest/${queryKey[1].params.id}`
  );
  return dataRes;
};

export const useNearestResList = (
  data: DataT,
  options:
    | UseQueryOptions<ResT, ApiError, ResT, QueryKey>
    | undefined = undefined
) => {
  return useQuery<ResT, ApiError, ResT, QueryKey>(
    ["nearestResList", data],
    listNearestRes,
    options
  );
};

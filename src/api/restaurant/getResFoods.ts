import { ApiError, fetcher } from "../config";
import {
  QueryFunction,
  UseQueryOptions,
  useQuery,
} from "@tanstack/react-query";

type DataT = {
  params: {
    id: string;
  };
};

type ResT = FoodT[];

type QueryKey = ["getResFoods", DataT];

const getResFoods: QueryFunction<ResT, QueryKey> = async ({ queryKey }) => {
  const { data: dataRes } = await fetcher.get<ResT>(
    `/get-res-food/${queryKey[1].params.id}/`
  );
  return dataRes;
};

export const useResFoods = (
  data: DataT,
  options:
    | UseQueryOptions<ResT, ApiError, ResT, QueryKey>
    | undefined = undefined
) => {
  return useQuery<ResT, ApiError, ResT, QueryKey>(
    ["getResFoods", data],
    getResFoods,
    options
  );
};

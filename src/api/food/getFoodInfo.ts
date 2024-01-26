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

type ResT = FoodT;

type QueryKey = ["getFoodInfo", DataT];

const getFoodInfo: QueryFunction<ResT, QueryKey> = async ({ queryKey }) => {
  const { data: dataRes } = await fetcher.get<ResT>(
    `/get-food/${queryKey[1].params.id}/`
  );
  return dataRes;
};

export const useFoodInformation = (
  data: DataT,
  options:
    | UseQueryOptions<ResT, ApiError, ResT, QueryKey>
    | undefined = undefined
) => {
  return useQuery<ResT, ApiError, ResT, QueryKey>(
    ["getFoodInfo", data],
    getFoodInfo,
    options
  );
};

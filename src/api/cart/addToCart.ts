import { ApiError, fetcher } from "../config";
import {
  QueryFunction,
  UseQueryOptions,
  useQuery,
} from "@tanstack/react-query";

type DataT = {
  params: {
    food_id: number;
  };
};

type ResT = null;

type QueryKey = ["addFoodToCart", DataT];

const addFoodToCart: QueryFunction<ResT, QueryKey> = async ({ queryKey }) => {
  const { data: dataRes } = await fetcher.get<ResT>(
    `/add/${queryKey[1].params.id}/`
  );
  return dataRes;
};

export const useAddFoodToCart = (
  data: DataT,
  options:
    | UseQueryOptions<ResT, ApiError, ResT, QueryKey>
    | undefined = undefined
) => {
  return useQuery<ResT, ApiError, ResT, QueryKey>(
    ["addFoodToCart", data],
    addFoodToCart,
    options
  );
};

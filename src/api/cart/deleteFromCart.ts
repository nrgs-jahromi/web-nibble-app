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

type QueryKey = ["deleteFoodFromCart", DataT];

const deleteFoodFromCart: QueryFunction<ResT, QueryKey> = async ({
  queryKey,
}) => {
  const { data: dataRes } = await fetcher.get<ResT>(
    `/remove/${queryKey[1].params.id}/`
  );
  return dataRes;
};

export const useDeleteFoodFromCart = (
  data: DataT,
  options:
    | UseQueryOptions<ResT, ApiError, ResT, QueryKey>
    | undefined = undefined
) => {
  return useQuery<ResT, ApiError, ResT, QueryKey>(
    ["deleteFoodFromCart", data],
    deleteFoodFromCart,
    options
  );
};

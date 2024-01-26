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

type ResT = UserItem;

type QueryKey = ["addFoodToFav", DataT];

const addFoodToFav: QueryFunction<ResT, QueryKey> = async ({ queryKey }) => {
  const { data: dataRes } = await fetcher.get<ResT>(
    `/add-fav-food/${queryKey[1].params.id}/`
  );
  return dataRes;
};

export const useAddFoodToFav = (
  data: DataT,
  options:
    | UseQueryOptions<ResT, ApiError, ResT, QueryKey>
    | undefined = undefined
) => {
  return useQuery<ResT, ApiError, ResT, QueryKey>(
    ["addFoodToFav", data],
    addFoodToFav,
    options
  );
};

import { date } from "yup";
import { ApiError, fetcher } from "../config";
import {
  QueryFunction,
  UseQueryOptions,
  useQuery,
} from "@tanstack/react-query";

type DataT = {
  params: {
    id: number;
  };
};

type ResT = FoodT[];
type QueryKey = ["listResFood", DataT];

const listResFood: QueryFunction<ResT, QueryKey> = async ({ queryKey }) => {
  const { data: dataRes } = await fetcher.get<ResT>(
    `/get-res-food/${queryKey[1].params.id}`
  );
  return dataRes;
};

export const useResFoodList = (
  dateParam: string,
  options?: UseQueryOptions<ResT, ApiError, ResT, QueryKey>
) => {
  const data: DataT = { params: { id: dateParam } };
  return useQuery(["listResFood", data], listResFood, options);
};

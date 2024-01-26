import { ApiError, fetcher } from "../config";
import {
  QueryFunction,
  UseQueryOptions,
  useQuery,
} from "@tanstack/react-query";

type DataT = {
  params: {
    review: string;
    user: number;
    credit_card: CardT[];
    restaurant: number;
    delivery_address: number;
  };
};

type ResT = OrderT;

type QueryKey = ["createOrder", DataT];

const createOrder: QueryFunction<ResT, QueryKey> = async ({ queryKey }) => {
  const { data: dataRes } = await fetcher.get<ResT>(`/create-order/`);
  return dataRes;
};

export const useCreateOrder = (
  data: DataT,
  options:
    | UseQueryOptions<ResT, ApiError, ResT, QueryKey>
    | undefined = undefined
) => {
  return useQuery<ResT, ApiError, ResT, QueryKey>(
    ["createOrder", data],
    createOrder,
    options
  );
};

import { ApiError, fetcher } from "../config";
import {
  QueryFunction,
  UseQueryOptions,
  useQuery,
} from "@tanstack/react-query";

type DataT = {
  params: {
    street: string;
    city: string;
    state: string;
    zip_code: string;
    category: string;
    user: number;
  };
};

type ResT = AddressT;

type QueryKey = ["addAddress", DataT];

const addAddress: QueryFunction<ResT, QueryKey> = async ({ queryKey }) => {
  const { data: dataRes } = await fetcher.get<ResT>(`/add-address/`);
  return dataRes;
};

export const useAddAddress = (
  data: DataT,
  options:
    | UseQueryOptions<ResT, ApiError, ResT, QueryKey>
    | undefined = undefined
) => {
  return useQuery<ResT, ApiError, ResT, QueryKey>(
    ["addAddress", data],
    addAddress,
    options
  );
};

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

type ResT = AddressT;

type QueryKey = ["getAddressInfo", DataT];

const getAddressInfo: QueryFunction<ResT, QueryKey> = async ({ queryKey }) => {
  const { data: dataRes } = await fetcher.get<ResT>(
    `/get-address/${queryKey[1].params.id}/`
  );
  return dataRes;
};

export const useAddressInformation = (
  data: DataT,
  options:
    | UseQueryOptions<ResT, ApiError, ResT, QueryKey>
    | undefined = undefined
) => {
  return useQuery<ResT, ApiError, ResT, QueryKey>(
    ["getAddressInfo", data],
    getAddressInfo,
    options
  );
};

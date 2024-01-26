import { ApiError, fetcher } from "../config";
import {
  QueryFunction,
  UseQueryOptions,
  useQuery,
} from "@tanstack/react-query";

type ResT = AddressT[];
type QueryKey = ["userAddressList"];

const listuserAddress: QueryFunction<ResT, QueryKey> = async (key) => {
  const { data: dataRes } = await fetcher.get<ResT>("/get-user-address/");
  return dataRes;
};

export const useUserAddressList = (
  options?: UseQueryOptions<ResT, ApiError, ResT, QueryKey>
) => {
  return useQuery(["userAddressList"], listuserAddress, options);
};

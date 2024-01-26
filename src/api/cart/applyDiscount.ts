import { ApiError, fetcher } from "../config";
import {
  QueryFunction,
  UseQueryOptions,
  useQuery,
} from "@tanstack/react-query";

type DataT = {
  params: {
    code: string;
  };
};

type ResT = {
  discount:
    | "Promo code applied successfully"
    | "This code is not active."
    | "This code does not belong to you.";
};

type QueryKey = ["addDiscount", DataT];

const applyDiscount: QueryFunction<ResT, QueryKey> = async ({ queryKey }) => {
  const { data: dataRes } = await fetcher.get<ResT>(`/apply-discount/`);
  return dataRes;
};

export const useApplyDiscount = (
  data: DataT,
  options:
    | UseQueryOptions<ResT, ApiError, ResT, QueryKey>
    | undefined = undefined
) => {
  return useQuery<ResT, ApiError, ResT, QueryKey>(
    ["applyDiscount", data],
    applyDiscount,
    options
  );
};

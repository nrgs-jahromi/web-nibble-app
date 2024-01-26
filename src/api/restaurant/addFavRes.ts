import { ApiError, fetcher } from "../../config";
import { QueryFunction, UseQueryOptions, useQuery } from "@tanstack/react-query";

type DataT = {
  params: {
    id: string;
  };
};

type ResT = UserItem;

type QueryKey = ["addResToFav", DataT];

const addResToFav: QueryFunction<ResT, QueryKey> = async ({ queryKey }) => {
  const { data: dataRes } = await fetcher.get<ResT>(
    `/add-fav-res/${queryKey[1].params.id}/`,
  );
  return dataRes;
};

export const useAddResToFav = (
  data: DataT,
  options: UseQueryOptions<ResT, ApiError, ResT, QueryKey> | undefined = undefined,
) => {
  return useQuery<ResT, ApiError, ResT, QueryKey>(["addResToFav", data], addResToFav, options);
};

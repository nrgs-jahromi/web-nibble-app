import { ApiError, fetcher } from "../../config";
import { QueryFunction, UseQueryOptions, useQuery } from "@tanstack/react-query";

type DataT = {
  params: {
    id: string;
  };
};

type ResT = UserItem;

type QueryKey = ["deleteResFromFav", DataT];

const deleteResFromFav: QueryFunction<ResT, QueryKey> = async ({ queryKey }) => {
  const { data: dataRes } = await fetcher.get<ResT>(
    `/delete-fav-res/${queryKey[1].params.id}/`,
  );
  return dataRes;
};

export const useDeleteResFromFav = (
  data: DataT,
  options: UseQueryOptions<ResT, ApiError, ResT, QueryKey> | undefined = undefined,
) => {
  return useQuery<ResT, ApiError, ResT, QueryKey>(["deleteResFromFav", data], deleteResFromFav, options);
};

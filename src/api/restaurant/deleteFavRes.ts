import {
  MutationFunction,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";
import { ApiError, fetcher } from "../config";

type DataT = {
  params: {
    id: number;
  };
};

type ResT = null;

const deleteRestFromFav: MutationFunction<ResT, DataT> = async (data) => {
  const { data: dataRes } = await fetcher.get<ResT>(
    `/delete-fav-res/${data.params.id}/`
  );
  return dataRes;
};

export const useDeleteRestFromFav = () => {
  const queryClient = useQueryClient();

  return useMutation<ResT, ApiError, DataT>(
    ["deleteRestFromFav"],
    deleteRestFromFav,
    {
      onSuccess: () => {
        queryClient.invalidateQueries({
          queryKey: ["favRestaurantList"],
        });
      },
    }
  );
};

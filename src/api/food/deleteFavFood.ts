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

const deleteFoodFromFav: MutationFunction<ResT, DataT> = async (data) => {
  const { data: dataRes } = await fetcher.get<ResT>(
    `/delete-fav-food/${data.params.id}/`
  );
  return dataRes;
};

export const useDeleteFoodFromFav = () => {
  const queryClient = useQueryClient();

  return useMutation<ResT, ApiError, DataT>(
    ["deleteFoodFromFav"],
    deleteFoodFromFav,
    {
      onSuccess: () => {
        queryClient.invalidateQueries({
          queryKey: ["favFoodList"],
        });
      },
    }
  );
};

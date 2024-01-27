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

const addRestToFav: MutationFunction<ResT, DataT> = async (data) => {
  const { data: dataRes } = await fetcher.get<ResT>(
    `/add-fav-res/${data.params.id}/`
  );
  return dataRes;
};

export const useAddRestToFav = () => {
  const queryClient = useQueryClient();

  return useMutation<ResT, ApiError, DataT>(["addRestToFav"], addRestToFav, {
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["favRestaurantList"],
      });
    },
  });
};

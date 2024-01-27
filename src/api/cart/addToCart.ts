import { ApiError, fetcher } from "../config";
import {
  QueryFunction,
  UseQueryOptions,
  useQuery,
  MutationFunction,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";

type DataT = {
  params: {
    food_id: number;
  };
};

type ResT = null;

// type QueryKey = ["addFoodToCart", DataT];

const addFoodToCart: MutationFunction<ResT, DataT> = async (data) => {
  const { data: dataRes } = await fetcher.get<ResT>(
    `/cart/add/${data.params.food_id}/`
  );
  return dataRes;
};

export const useAddFoodToCart = () => {
  const queryClient = useQueryClient();
  return useMutation<ResT, ApiError, DataT>(["addFoodToCart"], addFoodToCart, {
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["favFoodList"],
      });
    },
  });
};

// import {
//   MutationFunction,
//   useMutation,
//   useQueryClient,
// } from "@tanstack/react-query";
// import { ApiError, fetcher } from "../config";

// type DataT = {
//   params: {
//     id: number;
//   };
// };

// type ResT = null;

// const addFoodToFav: MutationFunction<ResT, DataT> = async (data) => {
//   const { data: dataRes } = await fetcher.get<ResT>(
//     `/add-fav-food/${data.params.id}/`
//   );
//   return dataRes;
// };

// export const useAddFoodToFav = () => {
//   const queryClient = useQueryClient();

//   return useMutation<ResT, ApiError, DataT>(["addFoodToFav"], addFoodToFav, {
//     onSuccess: () => {
//       queryClient.invalidateQueries({
//         queryKey: ["favFoodList"],
//       });
//     },
//   });
// };

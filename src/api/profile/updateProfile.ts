import {
  MutationFunction,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";
import { ApiError, fetcher } from "../config";

type DataT = {
  body: {
    full_name: string;
    email: string;
    phone: string;
    picture: string;
  };
};

type ResT = null;

const updateProfile: MutationFunction<ResT, DataT> = async (data) => {
  const formData = new FormData();
  formData.append("email", data.body.email);
  formData.append("full_name", data.body.full_name);
  formData.append("phone", data.body.phone);
  formData.append("picture", data.body.picture);

  const { data: dataRes } = await fetcher.put<ResT>(
    `/update-profile/`,
    data.body
  );
  return dataRes;
};

export const useProfileUpdate = () => {
  const queryClient = useQueryClient();
  return useMutation<ResT, ApiError, DataT>(["updateProfile"], updateProfile, {
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["userInfo"],
      });
    },
  });
};

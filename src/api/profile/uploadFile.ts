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
  body: FormData;
};

type ResT = FileT;

const uploadFile: MutationFunction<ResT, DataT> = async (data) => {
  const { data: dataRes } = await fetcher.post<ResT>(
    "/upload-image/",
    data.body, // Provide the FormData as the request body

    {
      headers: {
        "Content-Type": undefined, // Allow the browser to set the correct boundary
      },
    }
  );
  return dataRes;
};

export const useFileUploading = () => {
  const queryClient = useQueryClient();
  return useMutation<ResT, ApiError, DataT>(["uploadFile"], uploadFile, {
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["projectList"],
      });
    },
  });
};

import { useQuery } from "@tanstack/react-query";
import { getImages } from "../../services/images.services";

export const useSearchImagesQuery = (query: string | null) => {
  const { data, isLoading, error } = useQuery({
    enabled: !!query,
    queryKey: ["searchImages", query],
    queryFn: () => getImages(query),
  });

  return { data, isLoading, error };
};

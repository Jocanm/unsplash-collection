import { useQuery } from "@tanstack/react-query";
import { SEARCH_KEY } from "../useSearchImages";

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL as string;

const fetchImages = async (query: string | null) => {
  if (!query) {
    throw new Error("Query is required");
  }
  const response = await fetch(
    `${BACKEND_URL}/api/images?${SEARCH_KEY}=${query}`,
    {}
  );
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

export const useSearchImagesQuery = (query: string | null) => {
  const { data, isLoading, error } = useQuery({
    enabled: !!query,
    queryKey: ["searchImages", query],
    queryFn: () => fetchImages(query),
  });

  return { data, isLoading, error };
}
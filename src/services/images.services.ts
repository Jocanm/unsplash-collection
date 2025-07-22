import { SEARCH_KEY } from "../hooks/useSearchImages";
import type { ApiResponse } from "../interfaces/api";

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL as string;

export const getImages = async (
  query: string | null
): Promise<ApiResponse[]> => {
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

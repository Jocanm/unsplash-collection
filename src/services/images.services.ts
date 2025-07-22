import { BACKEND_URL, SEARCH_KEY } from "../constants";
import type { Image } from "../interfaces/images.interfaces";

export const getImages = async (
  query: string | null
): Promise<Image[]> => {
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

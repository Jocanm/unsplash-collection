import { BACKEND_URL } from "../constants";
import type { Collection } from "../interfaces/collections.interface";

export const getCollections = async (): Promise<Collection[]> => {
  const response = await fetch(`${BACKEND_URL}/api/collections`, {});
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

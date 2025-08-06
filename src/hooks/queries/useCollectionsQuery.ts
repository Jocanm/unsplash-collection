import { useQuery } from "@tanstack/react-query";
import { getCollections } from "../../services/collections.services";

export const useCollectionsQuery = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["collections"],
    queryFn: () => getCollections(),
  });

  return { data, isLoading, error };
};

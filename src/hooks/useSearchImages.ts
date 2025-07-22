import { useState } from "react";
import { useSearchParams } from "react-router";
import { SEARCH_KEY } from "../constants";
import { useSearchImagesQuery } from "./queries/useSearchImagesQuery";

export const useSearchImages = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get(SEARCH_KEY);
  const [textValue, setTextValue] = useState(query || "");

  const res = useSearchImagesQuery(query);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSearchParams({
      [SEARCH_KEY]: textValue.trim(),
    });
  };

  return {
    textValue,
    setTextValue,
    handleSubmit,
    searchResult: res,
  };
};

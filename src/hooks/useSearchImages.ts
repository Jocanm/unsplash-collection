import { useState } from "react";
import { useSearchParams } from "react-router";
import { useSearchImagesQuery } from "./queries/useSearchImagesQuery";

export const SEARCH_KEY = "query";

export const useSearchImages = () => {
  const [textValue, setTextValue] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get(SEARCH_KEY);

  const res = useSearchImagesQuery(query);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSearchParams({
      [SEARCH_KEY]: textValue,
    });
  };

  return {
    textValue,
    setTextValue,
    handleSubmit,
    searchResult: res,
  }
}
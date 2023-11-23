import { useEffect, useState } from "react";
import apiCliend from "../services/api-cliend";
import { CanceledError } from "axios";

interface Genre{
    id: number;
    name: string;
}
interface FetchGenresRes {
    count: number;
    results: Genre[];
  }
const useGenres = () => {
  const [genre, setGenre] = useState<Genre[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);
  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);
    apiCliend
      .get<FetchGenresRes>("/genres", {signal: controller.signal })
      .then((res) => {
        setGenre(res.data.results)
        setLoading(false);
      })
      .catch((err) => {
        if(err instanceof CanceledError) return;
        setError(err.message)});
        setLoading(false);

      return () => controller.abort();
  },[]);
  return {genre, error, isLoading};
};

export default useGenres;
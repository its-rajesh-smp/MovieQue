import axios from "axios";
import { useEffect, useState } from "react";
import { TMDB_BY_CATEGORY } from "../Firebase/API_URL";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NzRhZGJkNjIzNWE0YjJmZmM2ZWI3ZTg2NzNlNzVhZiIsInN1YiI6IjY0OTdhNDA4NmY0M2VjMDBjNWM2NTgzOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._HXJWeOmzgOoMgTlLMqU3vIFwwAfNsA8yL0IEF7iSV4",
  },
};

function useFetch(genres, isFetched, setLoading) {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  useEffect(() => {
    async function fetchData() {
      try {
        const { data } = await axios.get(
          `${TMDB_BY_CATEGORY}&page=${page}&with_genres=${genres}`,
          options
        );
        setData((p) => {
          return [...p, ...data.results];
        });
        isFetched.current = true
        setLoading(false)
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, [genres, page]);

  return [data, setPage];
}

export default useFetch;

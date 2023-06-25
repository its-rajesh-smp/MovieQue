import axios from "axios";
import { useEffect, useState } from "react";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NzRhZGJkNjIzNWE0YjJmZmM2ZWI3ZTg2NzNlNzVhZiIsInN1YiI6IjY0OTdhNDA4NmY0M2VjMDBjNWM2NTgzOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._HXJWeOmzgOoMgTlLMqU3vIFwwAfNsA8yL0IEF7iSV4",
  },
};

function useFetch(path) {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function fetchData() {
      try {
        const { data } = await axios.get(path, options);
        setData(data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, [path]);

  return data;
}

export default useFetch;

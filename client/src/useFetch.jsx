import { useEffect, useState } from "react";
const useFetch = (url) => {
  const [data, setData] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchAPI() {
      const response = await fetch(url);
      const data = await response.json();
      setData(data);
      setIsLoading(false);
    }
    fetchAPI();
  }, [url]);

  return { data, isLoading, setIsLoading };
};
export default useFetch;

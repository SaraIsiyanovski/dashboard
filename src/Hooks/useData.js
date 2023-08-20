import axios from "axios";
import { useEffect, useState } from "react";

const useData = (url) => {
  const [data, setData] = useState();
  const [error, setError] = useState();

  useEffect(() => {
    const promise = async () => {
      try {
        const axios1 = await axios.get(url);
        return setData(axios1.data);
      } catch (error) {
        setError(true);
      }
    };
    promise();
  }, [url]);

  return { data: data, error };
};

export { useData };

import { useState, useEffect } from "react";
import axios from "axios";

const useFetchData = <S>(
  url: string
): {
  data: S | null;
  done: boolean;
} => {
  const [data, setData] = useState<S | null>(null);
  const [done, setDone] = useState(false);

  const fetchReq = async () => {
    const collectedData = await axios.get<S, any>(url);
    setData(collectedData.data);
    setDone(true);
  };

  useEffect(() => {
    try {
      fetchReq();
    } catch (err) {
      console.log(err, new Error("Something went wrong! 400"));
    }
  }, [url]);

  return {
    data,
    done
  };
};

export default useFetchData;

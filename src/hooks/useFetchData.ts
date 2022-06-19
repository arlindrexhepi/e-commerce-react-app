import { useState, useEffect } from "react";
import instance from "../api/axiosInstance";

const useFetchData = <S>(url: string): { data: S | null; done: boolean } => {
  const [data, setData] = useState<S | null>(null);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const fetchReq = async () => {
      const collectedData = await instance.get<S, any>(url);
      setData(collectedData.data);
      setDone(true);
    };
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

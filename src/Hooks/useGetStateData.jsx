import axios from "axios";
import React, { useEffect, useState } from "react";

function useGetStateData({ url }) {
  const [data, setData] = useState([]);
  const [total, setTotal] = useState({});
  const [load, setLoad] = useState(true);

  useEffect(() => {
    async function fetch() {
      let { data } = await axios.get(url);

      setTotal(data.pop());
      setData(data);
      setLoad(false);
    }
    fetch();
  }, [url]);
  return [data, load, total];
}

export default useGetStateData;

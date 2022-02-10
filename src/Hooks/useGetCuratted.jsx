import axios from "axios";
import React, { useState, useEffect } from "react";

function useGetCuratted({ date1, date2 }) {
  const url = `https://api.covid19api.com/country/india?from=${date1}&to=${date2}`;
  const [data, setData] = useState([]);
  function convertToNum(x) {
    x = x.toString();
    var lastThree = x.substring(x.length - 3);
    var otherNumbers = x.substring(0, x.length - 3);
    if (otherNumbers != "") lastThree = "," + lastThree;
    var res = otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + lastThree;
    return res;
  }
  function curate(data) {
    let confirmed = 0;
    let deaths = 0;
    let recovered = 0;
    let active = 0;

    data.map((value) => {
      confirmed += value.Confirmed;
      deaths += value.Deaths;
      recovered += value.Recovered;
      active += value.Active;
    });
    confirmed = convertToNum(confirmed);
    deaths = convertToNum(deaths);
    active = convertToNum(active);
    recovered = convertToNum(recovered);
    return [confirmed, deaths, recovered, active];
  }
  useEffect(() => {
    axios
      .get(url)
      .then(({ data }) => {
        setData(curate(data));
      })
      .catch((error) => {
        console.log(error);
      });
  }, [date1, date2, url]);
  return data;
}

export default useGetCuratted;

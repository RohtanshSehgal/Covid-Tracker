import React from "react";
import useGetCuratted from "../../Hooks/useGetCuratted";
import { ContainerRow } from "../Styled Components/Container";
import Card from "../Card/Card";
function Results({ date1, date2 }) {
  const res = useGetCuratted({
    date1: date1,
    date2: date2,
  });
  return (
    <>
      <ContainerRow>
        <Card
          data={{
            state: "active",
            heading: "Total Active",
            count: res[3],
          }}
        />
        <Card
          data={{
            state: "recovered",
            heading: "Total Recovered",
            count: res[2],
          }}
        />
        <Card
          data={{
            state: "deaths",
            heading: "Total Deaths",
            count: res[1],
          }}
        />
      </ContainerRow>
      <Card
        data={{
          state: "nostate",
          heading: "Total Confirmed",
          count: res[0],
        }}
      />
    </>
  );
}

export default Results;

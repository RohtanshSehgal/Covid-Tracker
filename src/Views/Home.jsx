import React from "react";
import Card from "../Components/Card/Card";
import Item from "../Components/Item/Item";
import { apis } from "../Services/urls.api";
import {
  ContainerColumn,
  ContainerRow,
  GridDyn,
} from "../Components/Styled Components/Container";
import useGetStateData from "../Hooks/useGetStateData";
import Curated from "./Curated";

function Home() {
  const [arr, load, total] = useGetStateData({
    url: apis.state.path,
  });
  function convertToNum(x) {
    x = x.toString();
    var lastThree = x.substring(x.length - 3);
    var otherNumbers = x.substring(0, x.length - 3);
    if (otherNumbers != "") lastThree = "," + lastThree;
    var res = otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + lastThree;
    return res;
  }
  return (
    <>
      {Object.keys(total).length !== 0 ? (
        <ContainerRow>
          <Card
            data={{
              state: "active",
              heading: "Total Active",
              count: convertToNum(total.new_active),
            }}
          />
          <Card
            data={{
              state: "recovered",
              heading: "Total Recovered",
              count: convertToNum(total.new_cured),
            }}
          />
          <Card
            data={{
              state: "deaths",
              heading: "Total Deaths",
              count: convertToNum(total.new_death),
            }}
          />
        </ContainerRow>
      ) : (
        ""
      )}
      <GridDyn>
        <ContainerColumn>
          {load === false
            ? arr.map((val) => {
                return <Item key={val.active} data={val} />;
              })
            : "Loading"}
        </ContainerColumn>
        <Curated />
      </GridDyn>
    </>
  );
}

export default Home;

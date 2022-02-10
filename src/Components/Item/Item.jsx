import React from "react";
import "./items.css";
import { Active, Recovered, Deaths } from "../Styled Components/States";
function Item({ data }) {
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
      <div className="item">
        <h4>{data.state_name}</h4>
        <div className="items">
          <li>
            {" "}
            <Active>Active</Active>
          </li>
          <li>
            {" "}
            <Recovered>Cured</Recovered>
          </li>
          <li
            style={{
              color: "white",
            }}
          >
            Positive
          </li>
          <li>
            <Deaths>Death</Deaths>
          </li>
        </div>
        <div className="items">
          <li>
            <Active>{convertToNum(data.active)}</Active>
          </li>
          <li>
            <Recovered>{convertToNum(data.cured)}</Recovered>
          </li>
          <li
            style={{
              color: "white",
            }}
          >
            {convertToNum(data.positive)}
          </li>
          <li>
            <Deaths>{convertToNum(data.death)}</Deaths>
          </li>
        </div>
      </div>
      {/* <table className="item">
        <td className="items">
          <h1>{data.state_name}</h1>
        </td>
        <td className="items">
          <Active>{"Active: " + data.active}</Active>
        </td>
        <td className="items">
          <Recovered>{"Cured: " + data.cured}</Recovered>
        </td>
        <td className="items">{"Positive: " + data.positive}</td>
        <td className="items">
          <Deaths>{"Deaths: " + data.death}</Deaths>
        </td>
      </table> */}
    </>
  );
}

export default Item;

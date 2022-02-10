import React from "react";
import "./card.css";
function Card({ data }) {
  return (
    <div id="card" className={data.state}>
      <h5>{data.heading}</h5>
      <h2>{data.count}</h2>
    </div>
  );
}
export default Card;

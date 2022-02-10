import React, { useState } from "react";
import Results from "../Components/Results/Results";
import { ContainerColumn } from "../Components/Styled Components/Container";
import "./css/curatted.css";
function Curated() {
  const [date, setDate] = useState("");
  const [date2, setDate2] = useState("");
  const handleChange = (event) => {
    if (String(event.target.value).trim().length !== 0) {
      console.log(event.target.value);
      setDate(event.target.value);
    }
  };
  const handleChange2 = (event) => {
    if (String(event.target.value).trim().length !== 0) {
      console.log(event.target.value);
      setDate2(event.target.value);
    }
  };
  // const handleSubmit = () => {
  //   setLoad(true);
  //   if (String(date).trim().length !== 0 && String(date2).trim().length !== 0) {
  //     setLoad(false);
  //     console.log(load);
  //   } else {
  //     alert("Put valid Date and Time");
  //   }
  // };
  return (
    <ContainerColumn>
      <label for="Start">From: </label>
      <input
        className="picker"
        type="datetime-local"
        id="birthdaytime"
        name="birthdaytime"
        onChange={handleChange}
        value={date}
      />
      <label for="Start">To: </label>
      <input
        className="picker"
        type="datetime-local"
        id="birthdaytime"
        name="birthdaytime"
        onChange={handleChange2}
        value={date2}
      />
      {/* <input className="button" type="submit" onClick={handleSubmit} /> */}
      {(date + date2).length !== 0 ? (
        <Results date1={date} date2={date2} />
      ) : (
        ""
      )}
    </ContainerColumn>
  );
}

export default Curated;

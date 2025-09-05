import { useState } from "react";
import handlerData from "./helper";

export default function FunctionalComponents() {
  const [data, setData] = useState("");
  const handleData = () => {
    setData("Updated");
    console.log("hee");
  };

  return (
    <div>
      <h1>Functional Components Method testing</h1>
      <button data-testid="btn1" onClick={handleData}>
        Update
      </button>
      <button onClick={handlerData}>Save</button>
      <h2>{data}</h2>
    </div>
  );
}

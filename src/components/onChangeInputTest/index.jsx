import { useState } from "react";

export default function OnChange() {
  const [data, setData] = useState("");
  const [dataBase, setDataBase] = useState("");
  return (
    <div>
      <h1>Test the On Change Event With Input Text</h1>
      <input
        type="text"
        value={data}
        onChange={(e) => setData(e.target.value)}
      />

      <button onClick={() => setDataBase("updated Data")}>Update Data</button>
      <h1>{dataBase}</h1>
    </div>
  );
}

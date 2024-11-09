import React, { useState } from "react";

const App = () => {
  let x = 1;
  let [num, setNum] = useState(1);

  const handleAdd = () => {
    setNum((currValue) => {
      return currValue + 1;
    });
  };
  const handleDiff = () => {
    setNum((currValue) => {
      return currValue - 1;
    });
  };

  return (
    <div>
      <h1> {num}</h1>
      <button onClick={handleAdd}>Add</button>
      <button onClick={handleDiff}>Sub</button>
    </div>
  );
};

export default App;

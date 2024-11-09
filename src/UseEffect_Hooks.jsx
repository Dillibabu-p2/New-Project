import React, { useEffect, useState } from "react";

const UseEffect_Hooks = () => {
  const [num1, setNum1] = useState(100);
  const [num2, setNum2] = useState(1000);

  useEffect(() => {
    setNum2(200);
    console.log("useEffect called");
    return () => {
      setNum2(100);
      console.log("memory cleaned");
    };
  }, [num2, num1]);

  return (
    <div>
      <h1>{num1}</h1>
      <button onClick={() => setNum1((curr) => curr + 1)}>Add</button>
      <h1>{num2}</h1>
      <button onClick={() => setNum2((curr) => curr + 1)}>Add</button>
    </div>
  );
};

export default UseEffect_Hooks;

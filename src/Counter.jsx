import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(5);
  // console.log(setState);

  // let count = 1;
  function IncNum() {
    setCount(count + 1);
  }
  function DecNum() {
    if (count > 0) {
      setCount(count - 1);
    } else {
      return;
    }
  }

  return (
    <>
      <h1>{count}</h1>
      <button className="btn" onClick={IncNum}>
        Increment
      </button>
      <button className="btn" onClick={DecNum}>
        Decrement
      </button>
    </>
  );
};

export default Counter;

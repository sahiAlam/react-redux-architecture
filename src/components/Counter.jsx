import React from "react";
import { useSelector } from "react-redux";

const Counter = () => {
  const count = useSelector((state) => state);

  return (
    <div>
      <p>{count}</p>
    </div>
  );
};

export default Counter;

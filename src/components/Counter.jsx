import React from "react";

const Counter = ({ value, setcount, setflag }) => {
  return (
    <>
      <input
        className="counter"
        type="number"
        value={value}
        max={Number.MAX_VALUE}
        onChange={(e) => {
          setcount(e.target.value);
          setflag(true);
        }}
      />
    </>
  );
};

export default Counter;

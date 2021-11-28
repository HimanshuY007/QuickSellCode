import React from "react";

const Button = ({ type, change }) => {
  return (
    <>
      {type === "Increase" ? (
        <button className="plus" onClick={change}>
          +
        </button>
      ) : (
        <button className="minus" onClick={change}>
          -
        </button>
      )}
    </>
  );
};
export default Button;

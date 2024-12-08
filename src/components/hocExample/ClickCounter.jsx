import React from "react";
import withCounter from "./withCounter";

const ClickCounter = ({count, setCount}) => {

  return (
    <div className="flex flex-col justify-center h-48 items-center gap-4">
      <button
        type="button"
        className="border-2 m-2 p-1"
        onClick={() => setCount()}
      >
        Click Me
      </button>
      <div>Clicked {count} times</div>
    </div>
  );
};

export default withCounter(ClickCounter, 5)

import React, { useState } from "react";

const withCounter = (ChildComponent, incrementBy) => {
  return () => {
    const [count, setCount] = useState(0);

    return <ChildComponent count={count} setCount={() => setCount(count + incrementBy)} />;
  };
};

export default withCounter;

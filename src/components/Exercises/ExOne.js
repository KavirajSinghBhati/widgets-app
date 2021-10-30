import React, { useState } from "react";

const ExOne = () => {
  const [count, setCount] = useState(0);

  const handleClick = (cnt) => {
    setCount(cnt);
  };

  return (
    <div>
      <button onClick={() => handleClick(count + 1)}>Click me!</button>
      <h1>Current count: {count}</h1>
    </div>
  );
};

export default ExOne;

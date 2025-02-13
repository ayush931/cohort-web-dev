import { useEffect } from "react";
import { useState } from "react";
import { memo } from "react";

function Memo() {
  return (
    <div>
      <Counter />
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(0);

  // useEffect(() => {
  //   setInterval(() => {
  //     setCount(count + 1);
  //   }, 3000);
  // }, []);

  return (
    <div>
      <CurrentCount count={count} />
      <Increase setCount={setCount} />
      <Decrease setCount={setCount} />
    </div>
  );
}

const CurrentCount = memo(function CurrentCounter({ count }) {
  return <div>{count}</div>;
});

const Increase = memo(function Increase({ setCount }) {
  function increase() {
    setCount((count) => count + 1);
  }
  return <button onClick={increase}>Increase</button>;
});

const Decrease = memo(function Decrease({ setCount }) {
  function decrease() {
    setCount((count) => count + 1);
  }
  return <button onClick={decrease}>Decrease</button>;
});

export default Memo;

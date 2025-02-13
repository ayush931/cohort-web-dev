import { useState } from "react";

function Counter() {
  return (
    <div>
      <Counters />
    </div>
  );
}

function Counters() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <CurrentCount count={count} />
      <Increase setCount={setCount} />
      <Decrease setCount={setCount} />
    </div>
  );
}

function CurrentCount({ count }) {
  return <div>{count}</div>;
}

function Increase({ setCount }) {
  function increase() {
    setCount((count) => count + 1);
  }

  return <button onClick={increase}>Increase</button>;
}

function Decrease({ setCount }) {
  function decrease() {
    setCount((count) => count - 1);
  }

  return <button onClick={decrease}>Decrease</button>;
}

export default Counter;

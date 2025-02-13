import { RecoilRoot, useRecoilValue, useSetRecoilState } from "recoil";
import { counterAtom, evenSelector } from "./store/atoms/counter.js";

function Selector() {
  return (
    <RecoilRoot>
      <Counter />
      <Buttons />
      <IsEven />
    </RecoilRoot>
  );
}

function Buttons() {
  const setCount = useSetRecoilState(counterAtom);

  function increase() {
    setCount((count) => count + 2);
  }

  function decrease() {
    setCount((count) => count - 1);
  }

  return (
    <div>
      <button onClick={increase}>Increase</button>
      <button onClick={decrease}>Decrease</button>
    </div>
  );
}

function Counter() {
  const count = useRecoilValue(counterAtom); // Reads state

  return <div>Counter: {count}</div>;
}

function IsEven() {
  const even = useRecoilValue(evenSelector); // Reads derived state

  return <div>{even ? "Even" : "Odd"}</div>;
}

export default Selector;

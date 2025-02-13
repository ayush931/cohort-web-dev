import { RecoilRoot, useRecoilValue, useSetRecoilState } from "recoil";
import { counterAtom } from "./store/atoms/counter.js";

function Recoil() {
  return (
    <RecoilRoot>
      <Counters />
    </RecoilRoot>
  );
}

function Counters() {
  return (
    <div>
      <CurrentCount />
      <Increase />
      <Decrease />
    </div>
  );
}

function CurrentCount() {
  const count = useRecoilValue(counterAtom);
  return <div>{count}</div>;
}

function Increase() {
  const setCount = useSetRecoilState(counterAtom);
  function increase() {
    setCount((count) => count + 1);
  }
  return <button onClick={increase}>Increase</button>;
}

function Decrease() {
  const setCount = useSetRecoilState(counterAtom);
  function decrease() {
    setCount((count) => count - 1);
  }
  return <button onClick={decrease}>Decrease</button>;
}

export default Recoil;

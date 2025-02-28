import { useRef, useState } from "react";
import Button from "./Button";

function Otp({number}) {

  const ref = useRef(Array(number).fill(0))
  const [values, setValues] = useState(Array(number).fill(""))

  const [disabled, setDisabled] = useState(true)

  return (
    <div className="flex justify-center">
      {Array(number).fill(1).map((x, index) => <SubOtpBox reference={e => ref.current[index] = e} key={index} onDone={() => {
        if (index + 1 >= number) {
          return
        }
        ref.current[index + 1].focus()
      }} goBack={() => {
        if (index == 0) {
          return 
        }
        ref.current[index - 1].focus()
      }} />)}
      <br />
      <Button disabled={disabled}>Sign up</Button>
    </div>
  )
}

function SubOtpBox({ reference, onDone, goBack }) {
  const [inputBoxValue, setInputBoxValue] = useState("");

  return (
    <div>
      <input
        type=""
        name=""
        value={inputBoxValue}
        ref={reference}
        onKeyUp={(e) => {
          if (e.key == "Backspace") {
            goBack();
          }
        }}
        onChange={(e) => {
          const value = e.target.value;
          if (
            value == "0" ||
            value == "1" ||
            value == "2" ||
            value == "3" ||
            value == "4" ||
            value == "5" ||
            value == "6" ||
            value == "7" ||
            value == "8" ||
            value == "9"
          ) {
            setInputBoxValue(value);
            onDone();
          }
        }}
        className="m-1 w-[40px] h-[50px] rounded-xl bg-blue-500 outline-none px-4 text-white"
      />
    </div>
  );
}

export default Otp;

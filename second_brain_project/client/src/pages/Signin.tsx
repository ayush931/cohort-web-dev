import { useRef } from "react";
import Button from "../components/Button";
import Input from "../components/Input";
import axios from "axios";
import { BACKEND_URL } from "../config";
import { useNavigate } from "react-router-dom";

function Signin() {
  const usernameRef = useRef<HTMLInputElement>();
  const passwordRef = useRef<HTMLInputElement>();
  const navigate = useNavigate();

  async function signin() {
    const username = usernameRef.current?.value;
    const password = passwordRef.current?.value;
    const response = await axios.post(BACKEND_URL + "/api/v1/signin", {
      username,
      password,
    });
    const jwt = response.data.token
    localStorage.setItem("token", jwt);
    navigate("/")
  }
  return (
    <div className="h-screen w-screen bg-gray-200 flex items-center justify-center">
      <div className="bg-white rounded-md border min-w-48 p-8">
        <div>
          <Input ref={usernameRef} placeholder="Username" />
          <Input ref={passwordRef} placeholder="Password" />
        </div>
        <div className="flex justify-center pt-4">
          <Button
            onClick={signin}
            variant="primary"
            text="Sign in"
            fullWidth={true}
            loading={false}
          />
        </div>
      </div>
    </div>
  );
}

export default Signin;

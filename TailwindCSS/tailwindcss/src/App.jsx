import DarkMode from "./components/answer/DarkMode";
import SideBar from "./components/answer/SideBar";
import Theme from "./components/answer/Theme";
import ThemeButton from "./components/answer/ThemeButton";
import Otp from "./components/Otp";

function App() {
  return (
    <div>
      {/* <div className="sm:grid grid-cols-12">
        <div className="bg-red-400 col-span-4">Child 1</div>
        <div className="bg-yellow-400 col-span-6">Child 2</div>
        <div className="bg-blue-400 col-span-2">Child 3</div>
      </div>
      <br />
      <Responsive />
      <br />
      <br />
      <br />
      <br />
      <Input type="text" placeholder={"Enter your name"} />
      <Button disabled={false}>Sign up</Button>
      <Otp number={10} /> */}
      {/* <SideBar /> */}
      {/* <DarkMode /> */}
      {/* <Theme /> */}
      <ThemeButton />
    </div>
  );
}

export default App;

import { useState } from "react";
import { IoReorderThree } from "react-icons/io5";

function App() {

  const [sideBarOpen, setSideBarOpen] = useState(true);

  return (
    <div className="flex">
      <SideBar sideBarOpen={sideBarOpen} setSideBarOpen={setSideBarOpen} />
      <MainContent sideBarOpen={sideBarOpen} />
    </div>
  );
}

function SideBar ({ sideBarOpen, setSideBarOpen }) {
  if (!sideBarOpen) {
    return (
      <div className="fixed top-1 left-1">
        <div className="cursor-pointer hover:bg-slate-200" onClick={() => {
          setSideBarOpen(!sideBarOpen)
        }}>
          <IoReorderThree className="text-white" />
        </div>
      </div>
    )
  }
  return (
    <div className="w-96 h-screen bg-red-200">
      <div>
        <div className="cursor-pointer hover:bg-slate-200" onClick={() => {
          setSideBarOpen(!sideBarOpen)
        }}>
          <IoReorderThree />
        </div>
      </div>
    </div>
  )
}

function MainContent () {
  return (
    <div className="w-full">
      <div className="h-72 bg-black"></div>
      <div className="grid grid-cols-11 gap-8 p-8">
        <div className="h-96 rounded-2xl shadow-lg bg-red-200 col-span-2 -translate-y-24">

        </div>
        <div className="h-96 rounded-2xl shadow bg-green-200 col-span-6">

        </div>
        <div className="h-96 rounded-2xl shadow bg-yellow-200 col-span-3">

        </div>
      </div>
    </div>
  )
}

export default App;

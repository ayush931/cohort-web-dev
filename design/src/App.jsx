import { useEffect, useState } from "react";
import { IoReorderThree } from "react-icons/io5";

const useMediaQuery = (query) => {
  const [matches, setMatches] = useState(window.matchMedia(query).matches);

  useEffect(() => {
    const media = window.matchMedia(query);
    const listener = () => setMatches(media.matches);
    media.addListener(listener);
    return () => media.removeListener(listener);
  }, [query]);

  return matches;
};

function App() {
  const [sideBarOpen, setSideBarOpen] = useState(true);
  const isDesktop = useMediaQuery("(min-width: 768px)");

  useEffect(() => {
    if (isDesktop == false) {
      setSideBarOpen(false);
    } else {
      setSideBarOpen(true);
    }
  }, [isDesktop]);

  return (
    <div className="flex">
      <SideBar sideBarOpen={sideBarOpen} setSideBarOpen={setSideBarOpen} />
      <MainContent sideBarOpen={sideBarOpen} />
    </div>
  );
}

function SideBar({ sideBarOpen, setSideBarOpen }) {
  if (!sideBarOpen) {
    return (
      <div className="fixed top-0 left-0">
        <div
          className="cursor-pointer hover:bg-slate-200"
          onClick={() => {
            setSideBarOpen(!sideBarOpen);
          }}
        >
          <IoReorderThree />
        </div>
      </div>
    );
  }
  return (
    <div className="w-96 h-screen bg-red-200 fixed top-0 left-0 md:relative">
      <div>
        <div
          className="cursor-pointer hover:bg-slate-200"
          onClick={() => {
            setSideBarOpen(!sideBarOpen);
          }}
        >
          <IoReorderThree />
        </div>
      </div>
    </div>
  );
}

function MainContent() {
  return (
    <div className="w-full">
      <div className="h-72 bg-black hidden md:block"></div>
      <div className="grid grid-cols-11 gap-8 p-8">
        <div className="h-96 hidden md:block rounded-2xl shadow-lg bg-red-200 md:col-span-2 -translate-y-24 col-span-11"></div>
        <div className="h-96 rounded-2xl shadow bg-green-200 md:col-span-6 col-span-11"></div>
        <div className="h-96 rounded-2xl shadow bg-yellow-200 md:col-span-3 col-span-11"></div>
      </div>
    </div>
  );
}

export default App;

import LogoIcon from "../icons/LogoIcon";
import TwitterIcon from "../icons/TwitterIcon";
import YoutubeIcon from "../icons/YoutubeIcon";
import SidebarItem from "./SidebarItem";

function Sidebar() {
  return (
    <div className="h-screen bg-white border-r-2 w-72 fixed top-0 left-0 pl-5">
      <div className="flex text-2xl pt-4 items-center gap-2 font-bold">
        <div className="text-purple-600">
          <LogoIcon />
        </div>
        Brainly
      </div>
      <div className="pt-6">
        <SidebarItem text="Twitter" icon={<TwitterIcon />} />
        <SidebarItem text="Youtube" icon={<YoutubeIcon />} />
      </div>
    </div>
  )
}

export default Sidebar;

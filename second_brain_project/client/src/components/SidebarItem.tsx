import { ReactElement } from "react";

function SidebarItem ({ text, icon }: {
  text: string,
  icon: ReactElement
}) {
  return (
    <div className="flex items-start gap-2 px-1 py-2">
      {icon}
      {text}
    </div>
  )
}

export default SidebarItem;

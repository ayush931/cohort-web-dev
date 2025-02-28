function SideBar () {
  return (
    <div className="flex">
      <div className="bg-blue-200 transition-all ease-in-out duration-150 md:w-96 h-screen w-0">
        Sidebar
      </div>
      <div className="bg-green-200 flex-1 h-screen">
        Content
      </div>
    </div>
  )
}

export default SideBar
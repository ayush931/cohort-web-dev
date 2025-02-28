function ThemeButton () {
  return (
    <div className="h-screen bg-white dark:bg-black">
      <h1 className="text-black dark:text-white">Switch theme with button</h1>
      <button onClick={() => {
        document.querySelector("html").classList.toggle("dark")
      }} className="dark:text-white">Change theme</button>
    </div>
  )
}

export default ThemeButton
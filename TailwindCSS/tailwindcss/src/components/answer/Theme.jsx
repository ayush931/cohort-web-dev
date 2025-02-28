import { useState } from "react";

function Theme () {

  const [darkTheme, setDarkTheme] = useState(true)

  return (
    <div className={`h-screen ${darkTheme ? "bg-gray-800 text-white" : "bg-white text-black"}`}>
      <button onClick={() => setDarkTheme(!darkTheme)}>Toggle switch</button>
    </div>
  )
}

export default Theme;
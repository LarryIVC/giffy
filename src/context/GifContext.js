import { createContext, useState } from "react";

const GifContext = createContext()

export function GifProvider({ children }) {
  // const [gifs, setGifs] = useState([])
  return (
    <GifContext.Provider >
      {children}
    </GifContext.Provider>
  )
}
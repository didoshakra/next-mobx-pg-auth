import { createContext } from "react"
import "../styles/globals.css"
import GlobalStore from "../store/GlobalStore"
import DeviceStore from "../store/DeviceStore"

export const Context = createContext(null)

function MyApp({ Component, pageProps }) {
  return (
    <Context.Provider value={{ global: new GlobalStore(), devece: new DeviceStore() }}>
      <Component {...pageProps} />
    </Context.Provider>
  )
}

export default MyApp

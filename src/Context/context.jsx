import { createContext, useState } from "react";

const AppContext = createContext()

const NavbarContextProvider = ({children}) => {
    const [toggleNav,setToggleNav] = useState(false)
    return(
        <AppContext.Provider value={{toggleNav,setToggleNav}}>
            {children}
        </AppContext.Provider>
    )
}

export {NavbarContextProvider,AppContext}
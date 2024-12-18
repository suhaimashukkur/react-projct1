import { useState,createContext, useContext } from "react";
import React from 'react'


export const ThemeContext = React.createContext();
 export const ThemeUpdateContext = React.createContext();
 export function useTheme(){
    return ThemeContext(ThemeContext)
 }
 export function updateTheme(){
    return ThemeUpdateContext(ThemeUpdateContext)
 }

 export function ThemeProvider ({children}) {
    const[darkTheme,setDarkTheme] = useState(false);


 function ToggleTheme () {
    setDarkTheme((prevTheme) => !prevTheme)
 }


return(
    <ThemeContext.Provider value ={darkTheme}>
        <ThemeUpdateContext.Provider value = {ToggleTheme}>
            {children}
        </ThemeUpdateContext.Provider>

    </ThemeContext.Provider>
    
)
}


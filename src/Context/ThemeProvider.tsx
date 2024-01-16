import React, { Dispatch, ReactNode, createContext, useState } from 'react';
 

export type TthemeContext ={
    dark : boolean;
    setDark:Dispatch<React.SetStateAction<boolean>>

}

export const ThemeContext = createContext<TthemeContext | undefined>(undefined)
 
type TthemeProps = {
    children:ReactNode ;
}

const ThemeProvider = ({children} : TthemeProps) => {
    const [dark , setDark ] = useState(false)
     

    const values = {
       dark ,
       setDark
    }


    return (
        <ThemeContext.Provider value={values}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;
import React, { createContext, useContext, useState } from "react"
import './Select.css'

const selectContext = createContext(null)
const Select = ({children})=>{
    const [selectOption, setSelectOption] =  useState('')

     return(
        <selectContext.Provider value={{selectOption, setSelectOption}}>
              <select onChange={(e)=>setSelectOption(e.target.value)}>{children}</select>
        </selectContext.Provider> 
        )

}

const SelectOption = ({value , children})=>{
 const {selectOption} = useSelectContext()
//    console.log(selectOption)

   const  isActive = selectOption === value
    return <option className={`${isActive ? 'bgRed': 'bgWhite'}`}  value={value}>{children}</option>
}

 Select.SelectOption = SelectOption ;

  export default Select;

  const  useSelectContext =()=>{
    const context = useContext(selectContext)

    if(!context){
        throw new  Error("context out of bound")
    }

    return context  ;
  }


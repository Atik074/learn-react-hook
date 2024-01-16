
import React, { useContext }  from 'react'
import './App.css'
import Test from './Test'
import UseReducerExample from './UseReducerExample'
import CleanUp from './CleanUp'
import State_UseEffect from './State_UseEffect'
import UseRefExam from './UseRefExam'
import { ThemeContext, TthemeContext } from './Context/ThemeProvider'

function App() {
  const {dark , setDark} = useContext(ThemeContext) as TthemeContext;
   console.log(dark)

  return (
    <div    className={`${dark ? "bgBlack" : "bgWhite"}`}>
          <Test></Test> <hr />
          <UseReducerExample/> <hr />
          <State_UseEffect/> <hr />
          <CleanUp/> 
          <UseRefExam/>  

        
           <button
        
           style={{marginTop:'15px'}}
           onClick={()=>setDark(!dark)}
           >changeTheme</button>    
         
      
    </div>
  )
}

export default App

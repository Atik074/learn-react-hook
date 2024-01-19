
import React, { useContext }  from 'react'
import './App.css'
import Test from './Test'
import UseReducerExample from './UseReducerExample'
import CleanUp from './CleanUp'
import State_UseEffect from './State_UseEffect'
import UseRefExam from './UseRefExam'
import { ThemeContext, TthemeContext } from './Context/ThemeProvider'
import GamesResult from './Pages/HookPages/GamesResult'
import UsersContainer from './usersContainer'
import Select from './CompoundComponent/Select'

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

           <hr></hr>

           {/* <Profile/> */}
           <GamesResult/>
           <hr></hr>

           <UsersContainer/>

           <hr/>
          <Select>
             <Select.SelectOption value='option 01'>option 1</Select.SelectOption>
             <Select.SelectOption value='option 02'>option 2</Select.SelectOption>
             <Select.SelectOption value='option 03'>option 3</Select.SelectOption>
             <Select.SelectOption value='option 04'>option 4</Select.SelectOption>
          </Select>
         
      
    </div>
  )
}

export default App

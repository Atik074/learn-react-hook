import React, { ChangeEvent, useReducer } from 'react';
  
  type TAction = {
    type: string ,
    payload: string
  }

 let initialState = {name :'' , email: ''}
 const reduce = (currentState:typeof initialState , action:TAction)=>{
   
    // switch (action.type) {
    //     case 'increment':
    //         return
    //         break;
    
    //     case 'incrementByThree':
    //         return {count:currentState.count +  action.payload}
    //         break;
    
    //     default:
    //         return currentState ;
    //         break;
    // }
    switch (action.type) {
        case 'addName':
            return{ ...currentState , name:action.payload}
            break;
    
        case 'addEmail':
            return {... currentState , email : action.payload}
            break;
    
        default:
            return currentState ;
            break;
    }

 }

 const handleSubmitForm = (e:ChangeEvent<HTMLFormElement>)=>{
    e.preventDefault()
 }
const UseReducerExample = () => {
    const [state, dispatch] = useReducer(reduce, initialState)
    console.log(state)

    return (
        <>
        {/* <div style={{border:'2px solid red' , padding:'15px' , margin:'15px'}}>
            <p style={{fontSize:'23px'}}>useReducer hook learn</p>
              <h1>{state.count}</h1>
            <button onClick={()=>dispatch({type:"increment"})}>Increment</button>

            <button onClick={()=>dispatch({type:"incrementByThree" , payload:4})}>IncrementByFour</button>
        </div> */}
           <h3>use reducer with payload</h3>
  {/* use reeducer  */}
        <form onSubmit={ handleSubmitForm}>
     <input 
     onChange={(e)=>dispatch({type:'addName' , payload:e.target.value})}
      type="text" 
      name="name" id="" />
    <input type="email"
    onChange={(e)=>dispatch({type:"addEmail" , payload:e.target.value})}
          name="email" id="" /> 
        <input type="submit" value="submit" />
     </form>
            {/* use reducer */}


        </>
        
    );
};

export default UseReducerExample;
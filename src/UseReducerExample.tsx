import React, { useReducer } from 'react';


 let initialState = {count : 0}
 const reduce = (currentState , action)=>{
    switch (action.type) {

        case 'increment':
            return {count:currentState.count + 1 }
            break;
        case 'decrement':
            return {count:currentState.count - 1 }
            break;
    
        default:
            return currentState ;
            break;
    }

 }

const UseReducerExample = () => {
    const [state, dispatch] = useReducer(reduce, initialState)

    return (
        <div>
            <p style={{fontSize:'23px'}}>useReducer hook learn</p>
              <h1>{state.count}</h1>
            <button>Increment</button>
            <button>Decrement</button>
        </div>
    );
};

export default UseReducerExample;
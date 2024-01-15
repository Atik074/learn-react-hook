import React, {  useEffect, useRef } from 'react';
import CustomInput from './Component/CustomInput';

const UseRefExam = () => {
   const myRef = useRef<HTMLInputElement | null>(null)

  
        
 useEffect(()=>{
           myRef.current?.focus()

      } , []) 
       
   

    return (
        <div style={{marginTop:'50px'}}>
            <h3>useReducer learn:</h3>
            <hr/>
            <form action="#">
                 <CustomInput className='' ref={myRef}></CustomInput>
                <button style={{border:'2px solid red'}}>Submit</button>
            </form>
        </div>
    );
};

export default UseRefExam;
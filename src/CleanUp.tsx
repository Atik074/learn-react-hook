import React, { useEffect, useState } from 'react';

const CleanUp = () => {
    const [hide , setHide] = useState(false)
    const [user , setUser] = useState({name: '' , email:''})
          console.log(user)
   
    useEffect(()=>{
           console.log('render ho')   
    },
    
[user.name , user.email])



    return (
        <div style={{border:'2px solid black' , padding:'15px' , margin:'15px'}}>
          <h2 style={{textDecoration:'underline'}}>clearn up and useEffect part 02</h2>
    
               <button onClick={()=>setHide((prev)=> !prev)}>
                 {hide ? 'Show' : "Hide"}
               </button>
                {hide && <Todo/>}

                {/* set user ar part */}
                <hr />
                <h3>different user part</h3>

             <div>
               <input onBlur={(e)=>setUser({...user , name:e.target.value})} type="text" name="name" id="name" />
               <input onBlur={(e)=>setUser({...user , email:e.target.value})} type="email" name="email" id="email" />
           </div>
                <hr />

        </div>
    );
};



  /// clean function concepts
  const Counter =()=>{
    const [count, setCounter] = useState(0)


    useEffect(()=>{
        const intervalId = setInterval(()=>{
            console.log('render') 
            setCounter((prev) => prev + 1)
   
       },2000)
   
       return ()=>{
           clearInterval(intervalId)
       }
    }, [])

         return  <h1 style={{border:"2px solid green" , padding:"5px", width:'100px', margin:'5px auto',borderRadius:'20px'}}>{count}</h1>


  }

  // TODO 
  const Todo =()=>{
    const conrtroller = new AbortController()
    const signal = conrtroller.signal

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/todos/1' , {signal})
        .then(res => res.json())
        .then(data =>console.log(data.title))


        return ()=>{
            conrtroller.abort()
        }


    }, [])

    return <div style={{border:"2px solid black" , padding:"5px", width:'100px',fontSize:'25px', margin:'5px auto',borderRadius:'20px'}}>Todo</div>
  }


export default CleanUp;
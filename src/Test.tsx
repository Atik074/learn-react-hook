import React, { useState }  from 'react' ;
import './Test.css'


const Test = () => {
    const [user, setUser] = useState({name:'' , email:''})
 

    const handleSubmit = (e:React.ChangeEvent<HTMLFormElement>)=>{
        e.preventDefault()
        console.log(user)
       
    }
    const handleChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
        const input = e.target.name
        const value = e.target.value
      setUser( {...user , [input]:value })
    }

    return (
        <div style={{border:'2px solid green' , padding:'15px' , margin:'30px 0px'}}>
            <p  style={{fontSize:'23px'}}>multiple data get from object style</p>
     <form onSubmit={handleSubmit}>
     <input 
      onChange={handleChange}
      type="text" 
      name="name" id="" />
        <input 
         onChange={handleChange}
        type="email"
          name="email" id="" /> 
        <input type="submit" value="submit" />
     </form>

        </div>
    );
};

export default Test;
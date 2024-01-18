import React from "react";


const WithBorder = (WrappedComponent) =>{
    return (props)=>(
             <div style={{border:'1px solid red' , borderRadius:'50%'}}>
                   <WrappedComponent {...props}/>
             </div>
    );
}

export default WithBorder ;
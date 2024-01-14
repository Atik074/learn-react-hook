import React, { useEffect, useState } from 'react';

const State_UseEffect = () => {
    const [hidden , setHidden] = useState(false)

    useEffect(()=>{
       console.log('render')

        return ()=>{console.log('clean up function')}
    }, [hidden])

    return (
        <div>
         <button onClick={()=>setHidden((prev)=> !prev)}>Click</button>
        </div>
    );
};

export default State_UseEffect;
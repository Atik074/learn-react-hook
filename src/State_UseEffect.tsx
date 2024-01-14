import React, { useEffect, useState } from 'react';

const State_UseEffect = () => {
    const [hidden , setHidden] = useState(false)

    useEffect(()=>{
       console.log('render')

        return ()=>{console.log('clean up function')}
    }, [hidden])

    return (
        <div>
            <h2>useEffect and clean up part 01</h2>
         <button onClick={()=>setHidden((prev)=> !prev)}>Click</button>
        </div>
    );
};

export default State_UseEffect;
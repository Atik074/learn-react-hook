import React, { forwardRef } from 'react';


type TCustomInput = {
    className : string ;
}
const CustomInput = forwardRef<HTMLInputElement, TCustomInput>(({className} , inputRef) => {
  
    return (
        <div style={{marginTop:'50px'}}>
              <h3>Custom input learn:</h3>
            <hr />
              <input 
              className={className}
                ref={inputRef}
                 style={{padding:'10px 25px'}} 
                 type="text" name="name" id="name"/>
        </div>
    );
});

export default CustomInput;
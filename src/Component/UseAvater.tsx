import React from 'react';

const UseAvater = ({imageUrl}) => {
    return (
        <div>
            <img style={{width:'150px', height:'150px' , borderRadius:'50%' , margin:'10px'}} src={imageUrl} alt="" />
        </div>
    );
};

export default UseAvater;
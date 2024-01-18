import React from 'react';

const UserList = ({isLoading, error ,data}) => {
    
    if(isLoading && !error){
        return <p>Loading.....</p>
    }

    if(error){
        return <p>Something Went Wrong</p>
    }
    return (
        <div>
             {
               data.map((item)=><p>{item.name}</p>)
             }
        </div>
    );
};

export default UserList;
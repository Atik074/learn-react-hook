import React from 'react';
import UseAvater from '../../Component/UseAvater';
import WithBorder from '../../Component/WithBorder';

const UserWithBorder = WithBorder(UseAvater)

const GamesResult = () => {
    return (
        <div style={{display:'flex'}}>
            <UseAvater imageUrl={"https://hips.hearstapps.com/autoweek/assets/s3fs-public/rc-390-action_06.jpg?resize=980:*"}/>
            <UserWithBorder imageUrl={"https://hips.hearstapps.com/autoweek/assets/s3fs-public/rc-390-action_06.jpg?resize=980:*"}/>
           <UseAvater imageUrl={"https://hips.hearstapps.com/autoweek/assets/s3fs-public/rc-390-action_06.jpg?resize=980:*"}/>
           <UseAvater imageUrl={"https://hips.hearstapps.com/autoweek/assets/s3fs-public/rc-390-action_06.jpg?resize=980:*"}/>
        </div>
    );
};

export default GamesResult;
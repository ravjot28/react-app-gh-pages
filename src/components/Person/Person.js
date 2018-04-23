import React from 'react';

const person = (props) =>{
    <div>
        <h1>{props.userName}</h1>
        <p>{props.userInfo}</p>
    </div>
};

export default person;
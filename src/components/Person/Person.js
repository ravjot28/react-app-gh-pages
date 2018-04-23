import React from 'react';

const person = (props) =>{
    return (<div>
        <h1>{props.userName}</h1>
        <p>{props.userInfo}</p>
    </div>);
};

export default person;
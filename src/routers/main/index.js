import React from 'react';
import Bundle from '../bundle';
export default (props) => {
    return (
        <Bundle load={()=>{
           return import("./lazy.bundle")
        }}>
            {(Container) => <Container {...props}/>}
        </Bundle>
    );
}
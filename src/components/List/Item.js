import React from 'react';

export default function Item({post}){
    return(
        <div>
            <li>ID:{post.id} </li>
            <li>Username:{post.username}</li>
        </div>
        
    )
}
import React, { useState, useEffect } from 'react';
import '../ItemListContainer/ItemListContainer.css';
import List from '../../components/List/ItemList';




export default function ItemListContainer(props) {


    const [posts, setPosts] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            fetch('https://jsonplaceholder.typicode.com/posts')
            .then((response) => response.json())
            .then((data) => setPosts(data));
        }, 2000)
    }, []);
    
    return (
        <div className="container-home">
            <h1 className="saludo">{props.saludo}</h1>
            <div>
                <List postsInput={posts} />
            </div>
        </div>
    )
}
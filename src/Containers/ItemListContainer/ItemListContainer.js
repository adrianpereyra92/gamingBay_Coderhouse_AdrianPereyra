import React, { useState, useEffect } from 'react';
import '../ItemListContainer/ItemListContainer.css';
import ItemList from '../../components/List/ItemList';


export default function ItemListContainer({saludo, item}) {
    const [items, setItems] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            fetch("data.json", {
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
            })
                .then((response) => response.json())
                .then((data) => setItems(data));
        }, 2000);
    }, []);

    return (
        <div className="container-home">
             <h1 className="saludo">{saludo}</h1>
             <div>
             <ItemList postsInput={item} />
           </div>
        </div>
      
        
        
    
    );
}

// export default function ItemListContainer(props) {


//     const [posts, setPosts] = useState([]);

//     useEffect(() => {
//             fetch('https://jsonbin.io/6085f4d85210f622be39a68c'),{
//                 "method": "GET",
//             }
//             .then((response) => response.json())
//             .then((data) => setPosts(data));
//         },[]);

//     return (
//         <div className="container-home">
//             <h1 className="saludo">{props.saludo}</h1>
//             <div>
//                 <List postsInput={posts} />
//             </div>
//         </div>
//     )
// }
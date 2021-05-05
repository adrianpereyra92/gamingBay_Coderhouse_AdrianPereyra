import React, { useState, useEffect } from 'react';
import '../ItemListContainer/ItemListContainer.css';
import ItemList from '../../components/List/ItemList';
import Background from "../../assets/img/banner-bg.jpg";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function ItemListContainer({saludo}) {
    const [items, setItems] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            fetch('http://www.json-generator.com/api/json/get/cfgmzJUvVK?indent=2', {
                  method: 'GET',
                  headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                  },
            })
                .then((response) => response.json())
                .then((data) => {
                  setItems(data)
                  console.log(data)
                });
                
        }, 2000);
    }, []);

    return (
      <div className="container-home">
        <img className="fondo"src={Background} alt=""/>
        <h1 className="saludo">{saludo} </h1>
        <div className="item-list">
          <ItemList postsInput={items}/>
        </div>
      </div>
    )
}


//function showData(data){
  //   console.log(data)
  // }
  // fetch('http://www.json-generator.com/api/json/get/cfgmzJUvVK?indent=2')
  //   .then((data) => data.json())
  //   .then(showData)


  
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
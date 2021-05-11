import React from "react";
import Laptops from "../Laptops/Laptops";


export default function LaptopList({postsInput}) {
   
    return(
        <ul className="list">
            
            {postsInput && postsInput.map((post) => {
                return(
                    <Laptops key={post.id} post={post} />
                )
            })
            } 
        </ul>
    )   
}
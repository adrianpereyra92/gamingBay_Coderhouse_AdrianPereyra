import Item from './Item';
import './ItemList.css';

export default function List({postsInput}){
    return(
        <ul className="list">
            {
                postsInput.map((post) => {
                return(
                <Item key={post.id} post={post} />
                )
                
            })
        }
        </ul>
    )
}



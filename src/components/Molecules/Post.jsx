import { useContext } from "react";
import PostsContext from "../../contexts/PostsContext";
import styled from "styled-components";



const Post = ({ data }) => {

    const { setPosts, PostsActionTypes} = useContext(PostsContext);
    return ( 
        <div>
            <h1>{data.name}</h1>
            <img 
                src={data.image} 
                alt={data.name}
            />
            <p>{data.description}</p>
        </div>
     );
}
 
export default Post;